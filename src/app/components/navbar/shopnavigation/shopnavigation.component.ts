import { Component } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shopnavigation',
  templateUrl: './shopnavigation.component.html',
  styleUrls: ['./shopnavigation.component.scss']
})
export class ShopnavigationComponent {
  faCartPlus = faCartPlus

}
