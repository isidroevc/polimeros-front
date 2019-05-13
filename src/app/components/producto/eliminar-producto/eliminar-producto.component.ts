import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../providers/producto/producto.service';
import { Producto } from  '../../../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  producto: Producto;
  constructor(public productoService:ProductoService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.productoService.mostrar(this.activatedRoute.snapshot.params.id)
      .subscribe((producto) => {
        this.producto = Producto.parse(producto);
      }, (error) => {
        console.log(error);
        alert('No se encontro producto');
      });
  }

  eliminarProducto() {
    this.productoService.eliminar(this.producto.id)
      .subscribe((eliminado) => { 
        console.log('Producto eliminado correctamente');
        setTimeout(() => {
          this.router.navigate(['/Producto/listarProductos'])
        }, 3000);
      }, (error) => {
        console.log(error);
        alert('No se pudo eliminar el producto');
      })
  }


  noEliminarProducto(){
    this.router.navigate(['/Producto/listarProductos']);
  }

}
