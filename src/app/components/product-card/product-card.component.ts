import { Component, Input, OnChanges,SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SendDataService } from 'src/app/send-data.service';
import { DataModeler } from 'src/app/send-data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule,HttpClientModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnChanges{

  @Input() currencyFilterPassing: string = ''
  changeLog: string[] = [];

  dataSendedFilter:DataModeler[] = []
  dataSended: DataModeler[] = []
  constructor(private sendDataService: SendDataService) {
    // this.sendDataService.pruebaGetAllResoucr()
    //   .subscribe((data)=>{
    //     this.dataSended = data
    //     this.dataSendedFilter = data
    //   })
    this.sendDataService.getAllResources()
      .then((data: DataModeler[]) => {
        this.dataSended = data
        this.dataSendedFilter = data
        console.log(this.dataSended)
      })
  }

  filterResult(filter:string){
    if(!filter){
      this.dataSended = this.dataSendedFilter
    }
    this.dataSended = this.dataSendedFilter.filter(
      dataFilterByPrenda => dataFilterByPrenda.tipo.toLowerCase().includes(filter.toLowerCase())
    )
  }


  ngOnChanges(changes:SimpleChanges){
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        this.currencyFilterPassing = to
        // console.log(this.currencyFilterPassing)
        // log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        // console.log(this.currencyFilterPassing);
        // log.push(`${propName} changed from ${from} to ${to}`);
      }
      // console.log(this.currencyFilterPassing)
      this.filterResult(this.currencyFilterPassing)
    }
    this.changeLog.push(log.join(', '));
  }

}
