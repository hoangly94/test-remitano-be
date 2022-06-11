import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private repo: Repository<Video>,
    private connection: Connection
  ) { }

  async findAll() {
    return this.repo.find();
  }

  async findByUserId(userId: number) {
    return this.repo.find({
      userId
    });
  }

  async create(userId:number, createVideoDto: CreateVideoDto) {
    return this.repo.insert({
      ...createVideoDto,
      userId,
      title: 'Video title',
      description: 'Video decription',
    });
  }
}
