import { Component } from '@angular/core';
import { products } from './products';
import { FiltersPipe } from '../merchandise/filters.pipe';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

}
