import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensiveComponent } from './defensive.component';

describe('DefensiveComponent', () => {
  let component: DefensiveComponent;
  let fixture: ComponentFixture<DefensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefensiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
