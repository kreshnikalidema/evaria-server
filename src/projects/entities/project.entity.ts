import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Detail } from '../../details/entities/detail.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'clob', nullable: true })
  description: string;

  @OneToMany(() => Detail, detail => detail.project)
  details: Detail[];
}
