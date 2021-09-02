import { ITicket } from './../../interfaces/ticket.interface';
import { IMatch } from './../../interfaces/match.interface';
import { IEventDateGroup } from '../../interfaces/event.interface';
import { ILeague } from '../../interfaces/league.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss'],
})
export class LeagueSectionComponent implements OnInit {
  @Input() league: ILeague = null;
  @Input() eventDateGroups: IEventDateGroup[] = [];
  @Input() ticket: ITicket = { matches: [] };
  @Output() pickClicked: EventEmitter<IMatch> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPickClicked(event: IMatch) {
    this.pickClicked.emit(event);
  }
}
