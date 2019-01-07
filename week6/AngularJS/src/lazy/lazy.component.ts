import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: '<p>lazy loading</p>'
 
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
