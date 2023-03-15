import { Component, OnInit } from '@angular/core';
import { faCircleCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { CeomessagesService } from 'src/app/services/ceomessages.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit{
  thumbsUp  = faThumbsUp;
  circlecheck = faCircleCheck;
  ceoMessages:any;
  constructor(private _ceomessageservice: CeomessagesService){}
  ngOnInit(): void {
    this._ceomessageservice.getmessages().subscribe(res=>{
      console.log(res)
      this.ceoMessages=res
    })
  }
  

}
