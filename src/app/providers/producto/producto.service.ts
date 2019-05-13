import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Producto } from '../../models/producto.model';
import { Observable } from 'rxjs/internal/Observable';
import { BaseServiceService } from '../base-service.service';
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
}
