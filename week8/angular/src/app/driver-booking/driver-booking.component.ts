import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-driver-booking',
  templateUrl: './driver-booking.component.html',
  styleUrls: ['./driver-booking.component.css']
})
export class DriverBookingComponent implements OnInit {
bookingDateFrom:any;
bookingDateTo:any;
status="";
driverId;
driver;
altImage="https://pngimage.net/wp-content/uploads/2018/06/user-login-images-png-5.png";
  constructor(private route:ActivatedRoute,private router:Router,private readonly data:DataService) { }
  save(driver){
    console.log(this.bookingDateFrom);
    console.log(localStorage.getItem("username"))
    console.log(driver);
    this.data.BookingDrivers(driver,this.bookingDateFrom,this.bookingDateTo);
    this.status="Hiring Successfull";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.driverId=params.get('id');
    });
    this.data.getDriversById(this.driverId).subscribe((res:any)=>{
      this.driver=res.driver[0];
      console.log(res);

  });
  }
  
}
