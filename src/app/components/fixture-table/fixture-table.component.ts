import { ITicket } from './../../interfaces/ticket.interface';
import { IMatch } from './../../interfaces/match.interface';
import { IMarket } from './../../interfaces/markets.interface';
import { IPick, ISelectedPick } from '../../interfaces/pick.interface';
import { Market } from './../../enums/market.enum';
import { IEvent, IEventDateGroup } from './../../interfaces/event.interface';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-fixture-table',
  templateUrl: './fixture-table.component.html',
  styleUrls: ['./fixture-table.component.scss'],
})
export class FixtureTableComponent implements OnInit, OnChanges {
  @Input() eventDateGroup: IEventDateGroup = null;
  @Input() ticket: ITicket = { matches: [] };
  @Output() pickClicked: EventEmitter<IMatch> = new EventEmitter();
  dateOfTheWeekShorStrings = ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub'];
  marketValues = Market;
  objectKeys = Object.keys;
  MAIN_MARKET_ID = '1';
  selectedPicks: ISelectedPick[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ticket) {
      this.getSelectedPicks();
      this.changeDetector.detectChanges();
    }
  }

  getSelectedPicks() {
    this.selectedPicks = this.ticket.matches.map((match: IMatch) => {
      const selectedPickMarket = match?.event?.markets.find(
        (market: IMarket) => market.marketId === this.MAIN_MARKET_ID
      );
      const selectedPick = {
        id: match?.pick?.id,
        marketId: selectedPickMarket?.marketId,
        eventId: match?.event?.id,
      };
      return selectedPick;
    });
    // this.changeDetector.detectChanges();
  }

  getEventDate(date: string) {
    const newDate = new Date(date);
    this.changeDetector.detach();
    return newDate.toLocaleDateString('hr-HR', {
      day: 'numeric',
      month: 'short',
    });
  }

  getEventDateOfTheWeek(date: string): string {
    const newDate = new Date(date);
    return this.dateOfTheWeekShorStrings[newDate.getDay()];
  }

  getEventTime(date: string): string {
    const newDate = new Date(date);
    let hours = newDate.getHours().toString();
    let minutes = newDate.getMinutes().toString();
    if (hours === '0') {
      hours = '00';
    }
    if (minutes === '0') {
      minutes = '00';
    }
    return `${hours}:${minutes}`;
  }

  getAllPicksForEvent(markets: IMarket[]) {
    const allPicks: IPick[] = [];
    markets?.map((market: IMarket) => {
      if (market.marketId === this.MAIN_MARKET_ID) {
        allPicks.push(...market.picks.sort(this.sortCondition));
      }
    });
    return allPicks;
  }

  sortCondition(a: IMarket | IPick, b: IMarket | IPick): number {
    const aOrder = a.order;
    const bOrder = b.order;

    return aOrder - bOrder;
  }

  onPickClicked(event: IEvent, pick: IPick) {
    const selectedMatch = {
      event,
      pick,
    };
    this.pickClicked.emit(selectedMatch);
  }

  checkIfPickIsSelected(pick: IPick, event: IEvent): boolean {
    const isSelected = !!this.selectedPicks.find(
      (selectedPick: ISelectedPick) =>
        selectedPick.id === pick.id && selectedPick.eventId === event.id
    );
    return isSelected;
  }
}
