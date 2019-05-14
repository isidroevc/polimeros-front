import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMovimientosComponent } from './listar-movimientos.component';

describe('ListarMovimientosComponent', () => {
  let component: ListarMovimientosComponent;
  let fixture: ComponentFixture<ListarMovimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMovimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
