import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column({ nullable: true })
    password: string;

    @Column({ collation: 'utf8_unicode_ci' })
    title: string;

    @Column({ collation: 'utf8_unicode_ci' })
    description: string;

    @Column()
    avatar: string;

    @Column()
    src: string;

    @Column()
    status: number;

    @Column({ nullable: true })
    createdBy: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ nullable: true })
    updatedBy: number;

    @Column({ type: 'timestamp', nullable: true, onUpdate: 'NOW()' })
    updatedAt: Date;
}