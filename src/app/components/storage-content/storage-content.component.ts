import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCarService } from 'src/app/store-car.service';
import { DataModeler } from 'src/app/send-data.service';

@Component({
  selector: 'app-storage-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storage-content.component.html',
  styleUrls: ['./storage-content.component.css']
})
export class StorageContentComponent {

  currencyStorageProducs!:DataModeler[]

  constructor(private storageCarService:StoreCarService){
    this.currencyStorageProducs = this.storageCarService.getAllStorageProduct()
  }

}
