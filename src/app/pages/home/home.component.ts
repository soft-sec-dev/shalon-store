import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import { SearchingProductComponent } from 'src/app/components/searching-product/searching-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatButtonModule, MatCardModule, SearchingProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currencyFilterPassing:string=''

  listenSearching(filter:string){
    this.currencyFilterPassing = filter
    // console.log(this.currencyFilterPassing)
  }
}
