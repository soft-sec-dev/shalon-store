import { Injectable } from '@angular/core';
import { DataModeler } from './send-data.service';

@Injectable({
  providedIn: 'root'
})
export class StoreCarService {

  store:DataModeler[] = []

  constructor() { }

  updateSrote(data:DataModeler){
    this.store = [...this.store, data]
  }
}
