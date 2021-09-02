import { IPick } from './pick.interface';

export interface IMarket {
  marketId: string;
  bl: number;
  name: string;
  picks: IPick[];
  order: number;
  isValid: boolean;
}
