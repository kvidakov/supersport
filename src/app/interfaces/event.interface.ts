import { IMarket } from './markets.interface';
import { IFixture } from './fixture.interface';
import { IVisualizationInfo } from './visualization-info.interface';

export interface IEvent {
  isLive: boolean;
  sportId: string;
  id: string;
  linkedId: string;
  fixture: IFixture;
  markets: IMarket[];
  topLeagues: [];
  marketsTotal: number;
  isHighlighted: boolean;
  willBeLive: boolean;
  picksTotal: number;
  visualizationInfo: IVisualizationInfo;
}

export interface IEventDateGroup {
  date: string;
  events: IEvent[];
}
