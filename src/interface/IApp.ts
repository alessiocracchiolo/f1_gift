import { TStatus } from './TStatus';

export interface IApp {
    currentStatus: TStatus,
    currentSecond: number,
    stopwatch: number,
}