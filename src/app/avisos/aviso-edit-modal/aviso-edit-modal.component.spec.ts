import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoEditModalComponent } from './aviso-edit-modal.component';

describe('AvisoEditModalComponent', () => {
  let component: AvisoEditModalComponent;
  let fixture: ComponentFixture<AvisoEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoEditModalComponent]
    });
    fixture = TestBed.createComponent(AvisoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
