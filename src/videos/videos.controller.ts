import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) { }

  @Get()
  get(@Request() req) {
    return this.videosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/own')
  getOwn(@Request() req) {
    return this.videosService.findByUserId(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(req.user.id, createVideoDto);
  }

}
