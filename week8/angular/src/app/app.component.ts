import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Drivers Booking';
  url;
  ngOnInit()
  {
    //this.url='https://image.shutterstock.com/image-vector/vector-set-broken-cyan-light-260nw-1249638817.jpg';
    localStorage.setItem('logged','false');
    localStorage.setItem('username','');
  }
}
