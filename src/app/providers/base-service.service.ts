import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  public baseUrl = 'http://127.0.0.1:8000/api/';
  constructor() { }

  
}
