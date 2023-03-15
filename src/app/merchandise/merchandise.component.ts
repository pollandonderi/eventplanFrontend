import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent  implements OnInit{
  filteredString:string="";
  faMagnifyingGlass = faMagnifyingGlass;
  productData:any;
  constructor(private _productsService: ProductsService){}
  ngOnInit(): void {
    this._productsService.getdata().subscribe(res=>{
      console.log(res)
      this.productData=res
    })
  }

}
