import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservableComponent } from './reservable.component';

describe('ReservableComponent', () => {
  let component: ReservableComponent;
  let fixture: ComponentFixture<ReservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
