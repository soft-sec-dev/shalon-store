import { Injectable } from '@angular/core';

export interface DataModeler{
  id: number,
  precio: number,
  prenda: string,
  tipo: string,
  descripcion:string
}

@Injectable({
  providedIn: 'root'
})

export class SendDataService {
  url:string='http://localhost:3000/data'
  constructor() { }

  async getAllResources(): Promise<DataModeler[]>{
    const data = await fetch(this.url)
    return await data.json() ?? []
  }
}
