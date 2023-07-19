import { Component, OnInit } from '@angular/core';
import { Product, products } from './products';
import { FiltersPipe } from '../merchandise/filters.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products = products;
  count = 0;
  share() {
    window.alert('The product has been shared!');
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');

  }
  constructor(
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    
  }

}
