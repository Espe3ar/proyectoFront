import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInfoComponent } from './inicio-info.component';

describe('InicioInfoComponent', () => {
  let component: InicioInfoComponent;
  let fixture: ComponentFixture<InicioInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioInfoComponent]
    });
    fixture = TestBed.createComponent(InicioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
