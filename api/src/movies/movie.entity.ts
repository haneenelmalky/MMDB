import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'uuid' })
  uuid!: string;

  @Column()
  title!: string;

  @Column({ name: 'release_year' })
  releaseYear!: number;

  @Column({ name: 'runtime_minutes', nullable: true })
  runtimeMinutes!: number;

  @Column({ nullable: true })
  overview!: string;

  @Column({ name: 'poster_url', nullable: true })
  posterUrl!: string;

  @Column({ name: 'trailer_url', nullable: true })
  trailerUrl!: string;

  @Column({ nullable: true })
  language!: string;
}