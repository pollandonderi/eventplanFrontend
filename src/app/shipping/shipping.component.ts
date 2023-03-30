import { Component, OnInit } from '@angular/core';
import { faDollarSign, faLocationPin, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ShippingpriceService } from '../services/shippingprice.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
//  Mock api to pick shipping prices here
// https://mocki.io/v1/6d8c6b88-c6c4-45d0-811f-66e96a67f818
export class ShippingComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faLocationPin = faLocationPin;
  handHoldingDollar = faDollarSign
  shippingPrice:any;
constructor(private _shippingPriceService : ShippingpriceService){}
  ngOnInit(): void {
    this._shippingPriceService.getShippingPrices().subscribe(result =>{
      this.shippingPrice = result;
    });
  }

}
