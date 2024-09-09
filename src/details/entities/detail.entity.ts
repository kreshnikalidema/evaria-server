import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../../projects/entities/pcmt-master.entity';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar2', length: 255 })
  operatingCenterId: string;

  @Column({ type: 'varchar2', length: 255 })
  wbsCode1: string;

  @Column({ type: 'varchar2', length: 255 })
  wbsCode2: string;

  @Column({ type: 'varchar2', length: 255 })
  cbsCode: string;

  @Column({ type: 'varchar2', length: 255 })
  billType: string;

  @Column({ type: 'varchar2', length: 255 })
  discipline: string;

  @Column({ type: 'number' })
  kbrWorkhours: number;

  @Column({ type: 'number' })
  clientWorkhours: number;

  @Column({ type: 'varchar2', length: 255 })
  scheduleImpact: string;

  @Column({ type: 'number', nullable: true })
  scheduleImpactValue: number;

  @Column({ type: 'clob', nullable: true })
  scheduleImpactNotes: string;

  @ManyToOne(() => Project, (project) => project.details)
  @JoinColumn({ name: 'projectId' })
  project: Project;
}
