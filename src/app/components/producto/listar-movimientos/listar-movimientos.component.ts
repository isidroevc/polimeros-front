import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto.model';
import { Movimiento } from  '../../../models/movimiento.model';
import { ProductoService } from '../../../providers/producto/producto.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-listar-movimientos',
  templateUrl: './listar-movimientos.component.html',
  styleUrls: ['./listar-movimientos.component.css']
})
export class ListarMovimientosComponent implements OnInit {
  movimientos: Movimiento[];
  orden:string='desc';
  tipo:string = 'Todos';
  parametro:string='';
  constructor(public productoService: ProductoService, public title:Title) {
    this.title.setTitle('Listar Movimientos');

   }

  ngOnInit() {
    this.listarMovimientos();
  }

  listarMovimientos() {
    this.productoService.listarMovimientos(this.tipo, this.parametro, this.orden)
      .subscribe((movimientos) => {
       this.movimientos = movimientos; 
      }, (error) => {
        console.log(error);
        alert('No se pudieron obtener los datos');
      });
  }

}
