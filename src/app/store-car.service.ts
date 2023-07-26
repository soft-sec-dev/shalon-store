import { Injectable } from '@angular/core';
import { DataModeler } from './send-data.service';

@Injectable({
  providedIn: 'root'
})
export class StoreCarService {

  store:DataModeler[] = []
  updateValueStorage:number =0

  constructor() { }

  addProduct(product: DataModeler){
    console.log('Guardando un dato')
    this.store = [...this.store, product]
    console.log(this.store)
  }
  deleteProduct(productId:number){
    const data = this.store.filter((product)=>product.id !== productId)
    this.store = [...data]
  }

  getAllStorageProducts():DataModeler[]{
    return this.store
  }

  getQuantityProduct():number{
    return this.store.length
  }

  updateSrote(data:DataModeler){
    this.store = [...this.store, data]
  }

  getAllStorageProduct():DataModeler[]{
    return this.store
  }

  updateValue():number{
    return this.store.length +1
  }

  deleteProductByName(idNumber:number){
    const data = this.store.filter((product)=>product.id !== idNumber)
    this.store = [...data]
  }



}
