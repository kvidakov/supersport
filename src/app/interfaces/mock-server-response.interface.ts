import { ILeague } from './league.interface';
import { ILocation } from './location.interface';
import { IMarket } from './markets.interface';
import { ISport } from './sport.interface';

export interface IMockServerResponse {
  markets: IMarket[];
  locations: ILocation[];
  sport: ISport;
  league: ILeague;
}
