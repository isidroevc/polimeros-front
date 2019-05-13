import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseServiceService } from '../base-service.service';
import { Proveedor } from '../../models/proveedor.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends BaseServiceService {

  constructor(private http: HttpClient) {
    super();
  }

  listarProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.baseUrl}Proveedor/listarProveedores`, {});
  }
}
