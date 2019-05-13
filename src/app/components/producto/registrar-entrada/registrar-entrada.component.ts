import  { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router } from '@angular/router';
import  { ProductoService } from  '../../../providers/producto/producto.service';
import  { Producto }  from '../../../models/producto.model';
import  { Movimiento }  from '../../../models/movimiento.model';
@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.css']
})
export class RegistrarEntradaComponent implements OnInit {

  movimiento:Movimiento = new Movimiento();
  producto:Producto = new Producto();
  constructor(public productoService: ProductoService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.cargarDatos(id);
  }

  cargarDatos(id:number) {
    this.productoService.mostrar(id)
      .subscribe((producto) => {
        this.producto = Producto.parse(producto);
        
      }, (error) => {
        console.log(error);
        alert('No se pudo cargar los datos del producto');
        setTimeout(() => {
          this.router.navigate(['/Producto/listarProductos'])
        }, 3000);
      });
  }

  registrarEntrada() {
    this.movimiento.tipo = 'Entrada';
    this.movimiento.idProducto = this.producto.id;
    if (this.movimiento.cantidad > 0) {
      this.productoService.registrarMovimiento(this.movimiento)
      .subscribe((movimiento) => {
        alert('Movimiento Registrado Correctamente');
        this.cargarDatos(this.producto.id);
        this.movimiento = new Movimiento();
      }, (error) => {
        console.log(error);
        alert('No se pudo registrar el movimiento');
      });
    } else {
      alert('La cantidad para un movimiento debe ser mayor a 0');
    }
    
  }

  /**
   * 
   * create or replace function manejar_movimiento() returns trigger as
        $body$
            begin
                IF new.tipo::varchar = 'Entrada' THEN
                    
                    raise notice 'Value: %', new.id;
                    update producto set entradas = entradas + 1 where id = new."idProducto";
                    update producto set "cantidadExistencia" = "cantidadExistencia" + new.cantidad where id = new."idProducto";
                ELSE
                    update producto set salidas = salidas + 1 where id = new."idProducto";
                    update producto set "cantidadExistencia" = "cantidadExistencia" - new.cantidad where id = new."idProducto";
                END if;
               return new;
            end;
        $body$ LANGUAGE 'plpgsql';
        
        
        
        create trigger trigger_movimiento
        after insert on movimiento
        for each row execute procedure manejar_movimiento();
   */

}
