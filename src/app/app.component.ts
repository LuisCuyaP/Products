import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RestProduct';
  allProduct: Object;
  isEdit = false;
  productObj = {
    name: '',
    description: '',
    price: '',
    id: ''
  };

  constructor(private commonService: CommonService){}
     ngOnInit() {
        this.getLatestProduct();
    }

  addProduct(formObj){
    console.log(formObj);
    this.commonService.createProduct(formObj).subscribe((response) => {
         console.log("Product add");
         this.getLatestProduct();
         
       })
  }

  getLatestProduct(){
    this.commonService.getAllProduct().subscribe((response) => {
      this.allProduct = response;
    })
  }

  editProduct(product){
    this.isEdit = true;
    this.productObj = product;
  }

  deleteProduct(product){
    this.commonService.deleteProduct(product).subscribe(() => {
      this.getLatestProduct();
    })
  }

  updateProduct(){
    this.isEdit = !this.isEdit;
    this.commonService.updateProduct(this.productObj).subscribe(() => {
      this.getLatestProduct();
    })
  }

}

