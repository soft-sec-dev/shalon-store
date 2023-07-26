import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SendDataService } from 'src/app/send-data.service';
import { DataModeler } from 'src/app/send-data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HttpClientModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges {
  // @Output() addStorageProduct = new EventEmitter<DataModeler>()
  @Input() data!: DataModeler
  // @Input() currencyFilterPassing: string = ''
  @Output() addPRoductToStorage = new EventEmitter<DataModeler>()
  ngOnChanges(changes: SimpleChanges): void {
  }

  activateStorage(data: DataModeler) {
    this.addPRoductToStorage.emit(data)
  }
}
