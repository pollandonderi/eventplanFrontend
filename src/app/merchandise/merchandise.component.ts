import { Component, OnInit } from '@angular/core';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  faCartPlus = faCartPlus;
  filteredString:string="";
  faMagnifyingGlass = faMagnifyingGlass;
  productData:any;
  

}
