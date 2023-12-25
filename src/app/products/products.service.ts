import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts");
  }
}
