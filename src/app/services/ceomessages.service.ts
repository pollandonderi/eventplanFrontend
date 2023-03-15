import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CeomessagesService {

  constructor(private _http : HttpClient) {}
    getmessages(){
      return this._http.get("https://mocki.io/v1/44a901a7-c205-49cf-b6d8-fa29baf68e5d");
   }
}
