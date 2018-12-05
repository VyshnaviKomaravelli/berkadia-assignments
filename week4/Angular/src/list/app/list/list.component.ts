import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
@Input() items:string[];
@Output()itemCount1= new EventEmitter<number>();
count2=0;
selected()
{
  this.count2++;
  console.log(this.count2);
  this.itemCount1.emit(this.count2);
} 
constructor() { }

  ngOnInit() {
  }
 
}
