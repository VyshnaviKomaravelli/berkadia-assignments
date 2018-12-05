import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 counter=0;
 items:string[]=["SkyBags","Fb","American Tourister","Tommy Hilfiger"];
 selectedItems(count1)
 {
   console.log("parent"+count1);
   this.counter=count1;
 
 }
 constructor(){}
 ngOnInit()
 {
   }
}
