import { IEventDateGroup } from './event.interface';

export interface ILeague {
  id: string;
  name: string;
  order: number;
  seasonOriented: boolean;
  eventless: boolean;
  iconId?: string;
  locationName?: string;
  locationId?: string;
  locationOrder?: number;
  eventDateGroups?: IEventDateGroup[];
}
