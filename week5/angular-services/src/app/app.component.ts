import { Component } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  IT=[];
  Marketing=[];
  prct;
  num=10;
 value;
 show=false;
  constructor(private readonly data:DataService){
    
    this.Marketing=this.data.getDataMarketing();
    this.IT=this.data.getDataIt();
  }
  value1()
  {
this.value="IT";
this.show=true;
  }
  value2()
  {
this.value="Marketing"
this.show=true;
  }

}
