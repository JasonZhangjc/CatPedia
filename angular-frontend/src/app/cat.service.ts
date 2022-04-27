import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseURL = "http://localhost:8080/api/v1/cats";

  constructor(private httpClient: HttpClient) { }

  getCatsList(): Observable<Cat[]>{
    return this.httpClient.get<Cat[]>('${this.baseURL}');
  }
}
