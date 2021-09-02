import { IMatch } from './../../interfaces/match.interface';
import { ITicket } from './../../interfaces/ticket.interface';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnChanges {
  @Input() ticket: ITicket = { matches: [] };
  @Output() removePickClicked: EventEmitter<IMatch> = new EventEmitter();
  totalQuota = 0;
  betPlaced = 0;
  totalWin = 0;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
    if (changes.ticket) {
      this.getTotalQuota(changes.ticket?.currentValue?.matches);
      this.getTotalWin();
    }
  }

  removePick(ticketItem: IMatch) {
    console.log('ticketItem: ', ticketItem);
    this.removePickClicked.emit(ticketItem);
  }

  getTotalQuota(totalTicketMatches: IMatch[]) {
    console.log('totalTicketMatches: ', totalTicketMatches);
    let quota = 0;
    if (totalTicketMatches.length) {
      quota = totalTicketMatches.reduce(
        (sum: number, match: IMatch) => sum * match.pick.odds,
        1
      );
      quota = +(Math.round(quota * 100) / 100).toFixed(2);
    }
    this.totalQuota = quota;
    console.log('this.totalQuota: ', this.totalQuota);
  }

  getTotalWin() {
    this.totalWin = +(
      Math.round(this.totalQuota * this.betPlaced * 100) / 100
    ).toFixed(2);
  }
}
