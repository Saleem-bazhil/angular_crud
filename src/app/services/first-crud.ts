import { Injectable } from '@angular/core';
import { Api } from '../core/api';

@Injectable({
  providedIn: 'root'
})
export class CrudFirstService {

  constructor(private api: Api) {}

  getAll() {
    return this.api.get('crud-first');
  }

  getById(id: number) {
    return this.api.get(`crud-first/${id}`);
  }

  create(data: any) {
    return this.api.post('crud-first', data);
  }

  update(id: number, data: any) {
    return this.api.put(`crud-first/${id}`, data);
  }

  delete(id: number) {
    return this.api.delete(`crud-first/${id}`);
  }
}
