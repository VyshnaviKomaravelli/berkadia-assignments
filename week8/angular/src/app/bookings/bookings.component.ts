import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
bookings="";
username=localStorage.getItem('username');
  constructor(private readonly data:DataService) { }

  ngOnInit() {
    this.data.getBookings().subscribe((res:any)=>{
      this.bookings=res.bookings;
     console.log(res);
  });
  }


}
