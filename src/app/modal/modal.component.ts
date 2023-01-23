import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { DialogData } from '../app.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private proServ: ProductService) { }

  myForm: FormGroup | any;

  ngOnInit() {
    this.myForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productImg: new FormControl('', [Validators.required, RxwebValidators.extension({ extensions: ['png', 'jpg'] 
      })]),
      productPrice: new FormControl('', Validators.required),
      productQuantity: new FormControl('', Validators.required,),
    })
  }
  onSubmit() {
    console.log(this.myForm)
  }
}
