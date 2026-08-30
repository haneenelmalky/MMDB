import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'uuid',
    default: () => 'gen_random_uuid()',
    unique: true,
  })
  uuid!: string;

  @Column({ type: 'text' })
  title!: string;

  @Index('movies_year_idx')
  @Column({ type: 'integer', name: 'release_year' })
  releaseYear!: number;

  @Column({ type: 'integer', name: 'runtime_minutes', nullable: true })
  runtimeMinutes!: number | null;

  @Column({ type: 'text', nullable: true })
  overview!: string | null;

  @Column({ type: 'text', name: 'poster_url', nullable: true })
  posterUrl!: string | null;

  @Column({ type: 'text', name: 'trailer_url', nullable: true })
  trailerUrl!: string | null;

  @Column({ type: 'text', nullable: true })
  language!: string | null;
}