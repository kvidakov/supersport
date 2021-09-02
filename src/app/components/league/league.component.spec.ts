import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSectionComponent } from './league.component';

describe('LeagueSectionComponent', () => {
  let component: LeagueSectionComponent;
  let fixture: ComponentFixture<LeagueSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
