import { Component, Input } from '@angular/core';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../shop/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  faSquareCheck = faSquareCheck
  @Input() product!: Product;

}
