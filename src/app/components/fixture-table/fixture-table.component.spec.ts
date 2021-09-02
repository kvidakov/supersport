import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureTableComponent } from './fixture-table.component';

describe('FixtureTableComponent', () => {
  let component: FixtureTableComponent;
  let fixture: ComponentFixture<FixtureTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
