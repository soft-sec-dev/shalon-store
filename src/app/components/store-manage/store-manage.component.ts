import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StorageContentComponent } from '../storage-content/storage-content.component';

@Component({
  selector: 'app-store-manage',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, StorageContentComponent],
  templateUrl: './store-manage.component.html',
  styleUrls: ['./store-manage.component.css']
})
export class StoreManageComponent {

  @Input() ventas: number = 0

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(StorageContentComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
