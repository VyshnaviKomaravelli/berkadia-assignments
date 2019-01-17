import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url1="http://localhost:3000/drivers/";
url2="http://localhost:3000/booking/";
url3="http://localhost:3000/users";
  constructor(private readonly http:HttpClient) { }
  login(username:string,password:string):any{
   
    return this.http.get(this.url3+"/"+username+"/"+password);
  }
getDrivers():any
{
  return this.http.get(this.url1);
}
getUsers():any
{
  return this.http.get(this.url3);
}
getBookings():any
{
  return this.http.get(this.url2);
}
getDriversById(id:string){
  return this.http.get(this.url1+id);
}
BookingDrivers(driver,bookingDateFrom,bookingDateTo){
  let body = new URLSearchParams();
  body.set('user', localStorage.getItem('username'));
  body.set('driverName',driver );
  body.set('dateFrom',bookingDateFrom );
  body.set('dateTo',bookingDateTo );
 
  let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  
  this.http
      .post(this.url2, body.toString(), options)
      .subscribe(response => {
          console.log(response);
      });
}
}
