import { Injectable } from '@angular/core';
import { DataModeler } from './send-data.service';

@Injectable({
  providedIn: 'root'
})
export class StoreCarService {

  store:DataModeler[] = []
  updateValueStorage:number =0

  constructor() { }

  updateSrote(data:DataModeler){
    this.store = [...this.store, data]
  }

  getAllStorageProduct():DataModeler[]{
    return this.store
  }

  updateValue():number{
    this.updateValueStorage = this.updateValueStorage + 1
    return this.updateValueStorage
  }
}
