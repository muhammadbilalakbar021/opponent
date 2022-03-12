import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRunsComponent } from './key-runs.component';

describe('KeyRunsComponent', () => {
  let component: KeyRunsComponent;
  let fixture: ComponentFixture<KeyRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
