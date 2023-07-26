import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { SearchingProductComponent } from 'src/app/components/searching-product/searching-product.component';
import { Observable } from 'rxjs';
import { DataModeler, SendDataService } from 'src/app/send-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GradosUI } from 'src/app/send-data.service';
import { StoreManageComponent } from 'src/app/components/store-manage/store-manage.component';
import { StoreCarService } from 'src/app/store-car.service';
import { NavbarComponent } from 'src/app/components/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatButtonModule, MatCardModule, SearchingProductComponent, StoreManageComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currencyFilterPassing: string = ''
  currencyValueStorage: number = 0
  currencyTitle: string = 'List'


  //? get all resource form send-data-service
  storageFinalData: DataModeler[] = []
  datas: DataModeler[] = []

  constructor(private senDataService: SendDataService, private storageCarService: StoreCarService) {
    this.senDataService.pruebaGetAllResoucr()
      .subscribe((dataSended: any) => {
        this.storageFinalData = dataSended.data
        this.datas = dataSended.data
      })
  }

  //? Al hacer click en el boton añadir carrito
  recibDataFromProductCard(product: DataModeler) {
    this.storageCarService.addProduct(product)
  }

  recibDataFromSearchingProduct(filter: string) {
    if (filter.length === 0) {
      this.datas = this.storageFinalData
    } else {
      const dataFiltered = this.datas.filter((data) => data.prenda.toLowerCase().includes(filter))
      this.datas = dataFiltered
    }
  }

}
