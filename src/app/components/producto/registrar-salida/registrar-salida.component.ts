import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../providers/producto/producto.service';
import { Producto } from '../../../models/producto.model';
import { Movimiento } from '../../../models/movimiento.model';
@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css']
})
export class RegistrarSalidaComponent implements OnInit {

  movimiento: Movimiento = new Movimiento();
  producto: Producto = new Producto();
  constructor(public productoService: ProductoService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    this.cargarDatos(id);
  }

  cargarDatos(id: number) {
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

  registrarSalida() {
    this.movimiento.tipo = 'Salida';
    this.movimiento.idProducto = this.producto.id;
    if (this.movimiento.cantidad > 0) {
      this.productoService.registrarMovimiento(this.movimiento)
        .subscribe((movimiento) => {
          alert('Movimiento Registrado Correctamente');
          this.movimiento = new Movimiento();
          this.cargarDatos(this.producto.id);
        }, (error) => {
          console.log(error);
          alert('No se pudo registrar el movimiento');
        });
    } else {
      alert('La cantidad para un movimiento debe ser mayor a 0');
    }
  }
}
