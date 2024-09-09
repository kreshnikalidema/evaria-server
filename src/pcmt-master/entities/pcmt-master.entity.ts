import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IPcmtMaster } from '../pcmt-master.interface';

@Entity()
export class PcmtMaster implements IPcmtMaster {
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

  @CreateDateColumn({ type: 'timestamp' })
  dtInsert: Date;

  @Column()
  userUpdateLast: string;

  @UpdateDateColumn({ type: 'timestamp' })
  dtUpdateLast: Date;

  @Column()
  varianceNumber: string;

  @Column()
  revNo: string;

  @Column()
  pvTitle: string;

  @Column()
  clientRevNo: number;

  @Column()
  dtModifiedStr: string;

  @Column()
  cobraPeriodDate: string;

  @Column()
  dtInsertUtc: string;

  @Column()
  originalCostType: string;

  @Column()
  isFlowRunning: number;

  @Column()
  currentWorkStatusId: string;
}
