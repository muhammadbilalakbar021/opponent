import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentSummaryComponent } from './opponent-summary.component';

describe('OpponentSummaryComponent', () => {
  let component: OpponentSummaryComponent;
  let fixture: ComponentFixture<OpponentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
