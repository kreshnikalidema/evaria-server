import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { CoDetail } from '@/modules/co-detail/entities/co-detail.entity';
import { Attachment } from '@/modules/attachment/entities/attachment.entity';

@Entity()
export class Project {
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

  @OneToMany(() => CoDetail, (coDetail) => coDetail.project, {
    cascade: true,
    orphanedRowAction: 'delete',
    // eager: true,
  })
  coDetails: CoDetail[];

  @OneToMany(() => Attachment, (attachment) => attachment.project, {
    // eager: true,
  })
  attachments: Attachment[];

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
