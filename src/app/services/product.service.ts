import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreatePro, Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.products)
  }
  getProduct(_id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.products}/${_id}`);
  }
  deleteProduct(_id: string | number): Observable<any> {
    return this.http.delete(`${environment.products}/${_id}`);
  }
  createProduct(data: CreatePro): Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }
  updateProduct(id: number | string, data: CreatePro): Observable<Product> {
    return this.http.put<Product>(`${environment.products}/${id}`, data)
  }
}
