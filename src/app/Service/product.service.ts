import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7152/api/Products'; // Ganti dengan URL API yang sesuai

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl+"/GetAll");
  }
  createData(model: any): Observable<any> {
    const headers = new HttpHeaders ({'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.http.post(this.apiUrl+"/CreateData", model, options);
  }
}
