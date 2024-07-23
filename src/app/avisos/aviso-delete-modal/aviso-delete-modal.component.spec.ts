import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDeleteModalComponent } from './aviso-delete-modal.component';

describe('AvisoDeleteModalComponent', () => {
  let component: AvisoDeleteModalComponent;
  let fixture: ComponentFixture<AvisoDeleteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoDeleteModalComponent]
    });
    fixture = TestBed.createComponent(AvisoDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
