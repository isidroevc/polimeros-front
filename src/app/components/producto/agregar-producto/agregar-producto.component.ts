import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../../providers/proveedor/proveedor.service';
import { ProductoService } from '../../../providers/producto/producto.service';
import { Producto } from '../../../models/producto.model';
import { Proveedor } from '../../../models/proveedor.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  private proveedores:Proveedor[];
  public producto: Producto = new Producto();
  constructor(public proveedorService: ProveedorService,
              public productoService: ProductoService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    if(id) {
      this.productoService.mostrar(id)
        .subscribe((producto) => {
          this.producto = Producto.parse(producto);
          this.cargarProveedores();
        }, (error) => {
          console.log(error);
          alert('No se pudo cargar el producto');
        })
    } else {
      this.cargarProveedores();
    }
  }

  cargarProveedores() {
    this.proveedorService.listarProveedores()
      .subscribe((proveedores) => {
        this.proveedores = proveedores;
        if (proveedores.length == 0) {
          alert('No se pudieron cargar los proveedores');
        }
      }, (error) => {
        alert('No se pudieron cargar los proveedores');
        console.log(error);
      });
  }

  agregarProducto():any {
    console.log('Tipo de producto ', typeof this.producto);
    let mensajes = this.producto.validar();
    if(mensajes.length < 1) {
      if (!this.producto.id) {
        this.productoService.crear(this.producto)
         .subscribe((producto) => {
            alert('Producto dado de alta correctamente');
            this.producto = new Producto();
         }, (error) => {
            console.log(error);
            alert('No se pudo dar de alta el producto');
         });
      } else {
        this.productoService.modificar(this.producto)
         .subscribe((producto) => {
            alert('Producto guardado correctamente');
            this.producto = Producto.parse(producto);
         }, (error) => {
            console.log(error);
            alert('No se modificar el producto');
         });
      }
    } else { 
      let mensaje = '';
      for(let i= 0, c = mensajes.length; i < c; i++) {
        mensaje += mensajes[i] + '\n';
      }
      alert(mensaje);
    }
  }
}
