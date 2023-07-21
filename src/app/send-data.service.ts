import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface DataModeler{
  id: number,
  precio: number,
  prenda: string,
  tipo: string,
  descripcion:string
}
export interface GradosUI{
  id: number,
  grade: String
}
@Injectable({
  providedIn: 'root'
})

export class SendDataService {
  url:string='https://github.com/soft-sec-dev/shalon-store/blob/main/db.json'
  constructor(private http:HttpClient) { }

  async getAllResources(): Promise<DataModeler[]>{
    const data = await fetch(this.url)
    return await data.json() ?? []
  }

   pruebaGetAllResoucr(){
    return this.http.get<DataModeler[]>(`./assets/db.json`)
  }
}
