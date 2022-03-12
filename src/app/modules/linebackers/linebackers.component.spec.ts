import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinebackersComponent } from './linebackers.component';

describe('LinebackersComponent', () => {
  let component: LinebackersComponent;
  let fixture: ComponentFixture<LinebackersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinebackersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinebackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
