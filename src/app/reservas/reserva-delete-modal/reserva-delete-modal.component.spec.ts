import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaDeleteModalComponent } from './reserva-delete-modal.component';

describe('ReservaDeleteModalComponent', () => {
  let component: ReservaDeleteModalComponent;
  let fixture: ComponentFixture<ReservaDeleteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservaDeleteModalComponent]
    });
    fixture = TestBed.createComponent(ReservaDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
