import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './api.config';
@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) {}
  get(endpoint: string) {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  put(endpoint: string, data: any) {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }

  delete(endpoint: string) {
    return this.http.delete(`${this.baseUrl}/${endpoint}`);
  }
}
