import { IMatch } from './interfaces/match.interface';
import { ITicket } from './interfaces/ticket.interface';
import { ILeague } from './interfaces/league.interface';
import { SportEventsService } from './services/sport-events.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IMockServerResponse } from './interfaces/mock-server-response.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'supersport';
  sportEvents$: Observable<IMockServerResponse>;
  leagues$: Observable<ILeague[]>;
  ticket$: BehaviorSubject<ITicket> = new BehaviorSubject({ matches: [] });

  constructor(private sportEventsService: SportEventsService) {}

  ngOnInit() {
    this.getSportEvents();
  }

  private getSportEvents() {
    this.sportEvents$ = this.sportEventsService.getSportEvents();
    this.leagues$ = this.sportEvents$.pipe(
      map((sportEvents: IMockServerResponse) => {
        if (!!sportEvents && sportEvents.locations.length) {
          return sportEvents.locations[0].leagues;
        }
        return [];
      })
    );
  }

  onPickClicked(event: IMatch) {
    const currentTicketValue = this.ticket$.value.matches;
    const eventIndex = currentTicketValue.findIndex(
      (match: IMatch) => match.event.id === event.event.id
    );
    if (eventIndex === -1) {
      currentTicketValue.push(event);
    } else {
      // tslint:disable-next-line:max-line-length
      const isSamePick = !!currentTicketValue.find(
        (match: IMatch) =>
          match.pick.id === event.pick.id && match.event.id === event.event.id
      );
      isSamePick
        ? currentTicketValue.splice(eventIndex, 1)
        : currentTicketValue.splice(eventIndex, 1, event);
    }
    this.ticket$.next({ matches: currentTicketValue });
  }

  onRemovePickClicked(event: IMatch) {
    const currentTicketValue = this.ticket$.value.matches;
    const eventIndex = currentTicketValue.findIndex(
      (match: IMatch) => match.event.id === event.event.id
    );
    currentTicketValue.splice(eventIndex, 1);
    this.ticket$.next({ matches: currentTicketValue });
  }
}
