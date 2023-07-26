import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-searching-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searching-product.component.html',
  styleUrls: ['./searching-product.component.css']
})
export class SearchingProductComponent {

  @Output() changeFilter = new EventEmitter<string>()
  filterBy: string = ''

  filterResults(filterBy:string){
    this.filterBy = filterBy
    this.changeFilter.emit(this.filterBy)
  }
}
