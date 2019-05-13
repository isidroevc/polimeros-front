import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Producto } from '../../models/producto.model';
import { Observable } from 'rxjs/internal/Observable';
import { BaseServiceService } from '../base-service.service';
import { Movimiento } from 'src/app/models/movimiento.model';
@Injectable({
  providedIn: 'root'
})
export class ProductoService extends BaseServiceService {

  constructor(private http: HttpClient) { 
    super();
  }

  crear(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}Producto/agregarProducto`, producto, {});
  }

  mostrar(id:number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}Producto/mostrarProducto/${id}`,{});
  }

  modificar(producto: Producto):Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}Producto/modificarProducto/${producto.id}`, producto, {});
  }

  listar(parametro: string): Observable<Producto[]> {
    let url = '';
    if (parametro !== '' && parametro) {
      url = `${this.baseUrl}Producto/listarProductos?parametro=${parametro}`;
    } else { 
      url = `${this.baseUrl}Producto/listarProductos`;
    }
    return this.http.get<Producto[]>(url, {});
  }

  eliminar(id: number): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}Producto/eliminarProducto/${id}`, {}, {});
  }

  registrarMovimiento(movimiento: Movimiento):Observable<Movimiento> {
    return this.http.post<Movimiento>(`${this.baseUrl}Producto/registrarMovimiento`, movimiento, {});
  }

  listarMovimientos(idProducto, tipo):Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(`${this.baseUrl}Producto/listarMovimientos?idProducto=${idProducto}&tipo=${tipo}`, {});
  }
}
