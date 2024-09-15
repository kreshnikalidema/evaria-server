import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Project } from '@/modules/project/entities/project.entity';

@Entity('PCMT_CO_DETAILS')
export class CoDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: string;

  @Column()
  pvNumber: string;

  @Column()
  categoryId: string;

  @Column()
  categoryDesc: string;

  @Column()
  categoryType: string;

  @Column()
  discipline: string;

  @Column()
  operatingCenterId: string;

  @Column({ type: 'decimal', precision: 38, scale: 8 })
  kbrWorkhours: number;

  @Column()
  kbrWorkhoursValueType: string;

  @Column({ type: 'decimal', precision: 38, scale: 8 })
  kbrWorkhoursCost: number;

  @Column()
  kbrWorkhoursCostValueType: string;

  @Column()
  dtFrom: Date;

  @Column()
  dtTo: Date;

  @Column()
  isValid: number;

  @Column()
  insertUser: string;

  @CreateDateColumn()
  insertDt: Date;

  @Column({ nullable: true })
  updateUser: string;

  @UpdateDateColumn({ nullable: true })
  updateDt: Date;

  @Column()
  basis: string;

  @Column()
  varianceNumber: string;

  @Column()
  revNo: string;

  @Column({ type: 'decimal', precision: 38, scale: 8 })
  clientWorkhours: number;

  @Column()
  clientWorkhoursValueType: string;

  @Column({ type: 'decimal', precision: 38, scale: 8 })
  clientWorkhoursCost: number;

  @Column()
  statusId: string;

  @Column()
  clientWorkhoursCostValType: string;

  @Column()
  loadKey: number;

  @Column()
  scheduleImpact: string;

  @Column()
  scheduleImpactValue: number;

  @Column({ nullable: true })
  scheduleImpactNotes: string;

  @Column()
  isDeleted: number;

  @Column()
  stageId: number;

  @Column({ nullable: true })
  totalScheduleImpactValue: string;

  @Column({ nullable: true })
  totalScheduleImpactNotes: string;

  @Column({ nullable: true })
  dtInsertUtc: string;

  @Column({ nullable: true })
  dtUpdateUtc: string;

  @Column({ nullable: true })
  wbsCode1: string;

  @Column({ nullable: true })
  wbsCode2: string;

  @Column({ nullable: true })
  cbsCode: string;

  @Column({ nullable: true })
  businessUnit: string;

  @Column({ nullable: true })
  billType: string;

  @Column({ nullable: true })
  kbrCurrency: string;

  @Column({ nullable: true })
  clientCurrency: string;

  @Column()
  mandatoryDisciplineFlag: number;

  @Column({ nullable: true })
  originalCostType: string;

  @ManyToOne(() => Project, (project) => project.coDetails)
  project: Project;

  @BeforeInsert()
  setInsertUtc() {
    this.dtInsertUtc = new Date().toISOString();
    this.dtUpdateUtc = new Date().toISOString();
  }

  @BeforeUpdate()
  setUpdateUtc() {
    this.dtUpdateUtc = new Date().toISOString();
  }
}
