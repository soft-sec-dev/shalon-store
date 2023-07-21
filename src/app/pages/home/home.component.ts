import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { SearchingProductComponent } from 'src/app/components/searching-product/searching-product.component';
import { Observable } from 'rxjs';
import { DataModeler, SendDataService } from 'src/app/send-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GradosUI } from 'src/app/send-data.service';
import { StoreManageComponent } from 'src/app/components/store-manage/store-manage.component';
import { StoreCarService } from 'src/app/store-car.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatButtonModule, MatCardModule, SearchingProductComponent,StoreManageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  currencyFilterPassing:string=''
  currencyValueStorage:number = 0

  constructor(private senDataService:SendDataService, private storageCarService:StoreCarService){

  }
  listenSearching(filter:string){
    this.currencyFilterPassing = filter
    // console.log(this.currencyFilterPassing)
  }

  addStorageProduct(data:DataModeler){
    this.currencyValueStorage= this.storageCarService.updateValue()
    this.storageCarService.updateSrote(data)
    // const allStorage = this.storageCarService.getAllStorageProduct()
    // console.log(allStorage)
  }
}
