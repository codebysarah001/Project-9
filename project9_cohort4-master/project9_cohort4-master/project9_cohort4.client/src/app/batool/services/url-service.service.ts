import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private http : HttpClient) { }
  baseUrl = 'https://localhost:7001/api'

  geytAnumalById(id :any) : Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/Animals1/${id}`)
  }

  addAnimal(data :any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Animals1`, data)
  }

  updateAnimal(id :any , data:any ): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/Animals1/${id}`,data)
  }

  deleteAnimal(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Animals1/${id}`)
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Category`)
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Product`)
  }

  geytProductById(id :any) : Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/Product/${id}`)
  }
}
