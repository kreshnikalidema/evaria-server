export interface IPcmtMaster {
  id: number;

  pvNumber: string;

  incrementalId: number;

  projectId: string;

  projectName: string;

  clientId: string;

  disciplineId: string;

  currencyCode: string;

  userInsert: string;

  dtInsert?: Date;

  userUpdateLast: string;

  dtUpdateLast?: Date;

  varianceNumber: string;

  revNo: string;

  pvTitle: string;

  clientRevNo: number;

  dtModifiedStr: string;

  cobraPeriodDate: string;

  dtInsertUtc: string;

  originalCostType: string;

  isFlowRunning: number;

  currentWorkStatusId: string;
}
