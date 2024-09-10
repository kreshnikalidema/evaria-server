import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { PcmtCoDetail } from '@/pcmt-co-details/entities/pcmt-co-detail.entity';


@Entity('PCMT_MASTER')
export class PcmtMaster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pvNumber: string;

  @Column()
  incrementalId: number;

  @Column()
  projectId: string;

  @Column()
  projectName: string;

  @Column()
  clientId: string;

  @Column()
  disciplineId: string;

  @Column()
  currencyCode: string;

  @Column()
  userInsert: string;

  @CreateDateColumn()
  dtInsert: Date;

  @Column()
  dtInsertUtc: string;

  @Column()
  userUpdateLast: string;

  @UpdateDateColumn()
  dtUpdateLast: Date;

  @Column({ nullable: true })
  clientRevNo: number;

  @Column()
  varianceNumber: string;

  @Column()
  revNo: string;

  @Column()
  pvTitle: string;

  @Column({ nullable: true })
  dtModifiedStr: string;

  @Column({ nullable: true })
  cobraPeriodDate: string;

  @Column({ nullable: true })
  originalCostType: string;

  @Column()
  isFlowRunning: number;

  @Column({ nullable: true })
  currentWorkStatusId: string;

  @Column({ type: 'clob', nullable: true })
  dataJson: string;

  @OneToMany(() => PcmtCoDetail, (coDetail) => coDetail.pcmtMaster, {
    cascade: true,
    orphanedRowAction: 'delete',
    eager: true,
  })
  coDetails: PcmtCoDetail[];

  @BeforeInsert()
  setInsertUtcTimestamp() {
    this.dtInsertUtc = new Date().toISOString();
    this.userUpdateLast = new Date().toISOString();
  }

  @BeforeUpdate()
  setUpdateUtcTimestamp() {
    this.userUpdateLast = new Date().toISOString();
  }
}
