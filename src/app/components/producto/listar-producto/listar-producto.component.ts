import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../providers/producto/producto.service';
import { Producto } from  '../../../models/producto.model';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos: Producto[];
  parametro:string = '';
  constructor(public productoService: ProductoService) { 

  }

  ngOnInit() {
     this.listarProductos();
  }

  listarProductos() {
    this.productoService.listar(this.parametro)
       .subscribe((productos) => {
        this.productos = productos;
       }, (error) => {
         console.log(error);
         alert('No se encontraron resultados');
       });
  }

}
