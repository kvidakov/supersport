import { ILeague } from './league.interface';
import { IParticipant } from './participants.interface';

export interface IFixture {
  startDate: string;
  type: string;
  participants: IParticipant[];
  league?: ILeague;
}
