import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMockServerResponse } from '../interfaces/mock-server-response.interface';
import { mockServerData } from './../../../mock-data';

@Injectable({ providedIn: 'root' })
export class SportEventsService {
  constructor(private http: HttpClient) {}

  getSportEvents(): Observable<IMockServerResponse> {
    // return this.http.get<IMockServerResponse>(
    // tslint:disable-next-line:max-line-length
    //   `https://sportdataprovider.stage-volcano.com/api/public/prematch/SportEvents?SportId=1&LocationId=243&timezone=-120&clientType=MobileWebConsumer&lang=en`
    // );
    return of(mockServerData);
  }
}
