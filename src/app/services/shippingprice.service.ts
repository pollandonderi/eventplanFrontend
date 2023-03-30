import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShippingpriceService {

  constructor(private _http : HttpClient) { }
    getShippingPrices(){
      return this._http.get('https://mocki.io/v1/6d8c6b88-c6c4-45d0-811f-66e96a67f818');
    }
}
