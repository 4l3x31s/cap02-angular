import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeudaComponent } from './detalle-deuda.component';

describe('DetalleDeudaComponent', () => {
  let component: DetalleDeudaComponent;
  let fixture: ComponentFixture<DetalleDeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDeudaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
