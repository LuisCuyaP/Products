import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) {}

  createProduct(product){
    return this._http.post("http://localhost:3000/products",product);
  }
  getAllProduct(){
    return this._http.get("http://localhost:3000/products");
  }

  updateProduct(product){
    return this._http.put("http://localhost:3000/products/" + product.id, product);
  }

  deleteProduct(product){
    return this._http.delete("http://localhost:3000/products/" + product.id);
  }


}
