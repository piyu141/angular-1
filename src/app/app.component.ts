import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

export interface DialogData { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productArr: any[] = [];

  newSubject = new Subject()

  constructor(public dialog: MatDialog) { }

  openModal() {
    this.dialog.open(ModalComponent);
  }

  catchproduct(product: any) {
    let name = product.name;

    let index = this.productArr.findIndex(res => res.name === name)

    if (index === -1) {
      this.productArr.push(product);
      this.newSubject.next(this.productArr.slice(0));
    } else {
      this.productArr[index].quantity = product.quantity;
      this.newSubject.next(this.productArr.slice(0));
    }
  }
  getTotalCost() {
    return this.productArr.map(product => product.quantity * product.price).reduce((acc, value) => acc + value, 0);
  }
}
