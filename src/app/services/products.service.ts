import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient) { }
  getdata(){
    return this._http.get("https://mocki.io/v1/409afde7-5e44-4a0d-8293-2ec13a8a9958");
    // mock api by https://mocki.io/fake-json-api
  }
}
