import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtyTwoComponent } from './thirty-two.component';

describe('ThirtyTwoComponent', () => {
  let component: ThirtyTwoComponent;
  let fixture: ComponentFixture<ThirtyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
