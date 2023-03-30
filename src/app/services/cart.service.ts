import { Injectable } from '@angular/core';
import { Product, products } from '../shop/products';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total:any;
  items :Product[]=[]

  addToCart(product: Product) {
    this.items.push(product);
  }
  removefromCart(){
    this.items.pop();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(
    private http : HttpClient
  ) { }
}
