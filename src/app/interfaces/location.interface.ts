import { ILeague } from './league.interface';

export interface ILocation {
  id: string;
  name: string;
  leagues: ILeague[];
  order: number;
}
