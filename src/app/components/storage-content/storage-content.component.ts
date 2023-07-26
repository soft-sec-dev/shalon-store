import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCarService } from 'src/app/store-car.service';
import { DataModeler } from 'src/app/send-data.service';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-storage-content',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './storage-content.component.html',
  styleUrls: ['./storage-content.component.css']
})
export class StorageContentComponent {

  currencyStorageProducs:DataModeler[]=[]

  constructor(private storageCarService:StoreCarService){
    this.currencyStorageProducs = this.storageCarService.getAllStorageProduct()
  }

  getAllProductFromService(){
    this.currencyStorageProducs = this.storageCarService.getAllStorageProduct()
  }

  deleteProduct(idNumber:number){
    this.storageCarService.deleteProductByName(idNumber)
  }

}
