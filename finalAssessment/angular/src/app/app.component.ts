import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../app/dataservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = 0;
  title = 'assessment'; selectedLink;
  questionid1 = Math.floor((Math.random() * 7) + 1).toString();
  questions;
  i = 0;percentage=1;
  questions1 = [];
  questionNumber = 0;
  questions2=[];

  constructor(private route: ActivatedRoute, private router: Router, private readonly data: DataserviceService, private readonly http: HttpClient) { }
  ngOnInit() {
    this.data.getQuestionsById(this.questionid1).subscribe((res: any) => {
      this.questions = res.questions[0];
     // console.log(this.questionid1);
      this.questions1.push(this.questionid1);
    });
  

  }
 

  next() {
    this.questionid1 = Math.floor((Math.random() * 7) + 1).toString();

    for (var i = 0, l = this.questions1.length; i < l; i++) {
      if (this.questionid1 === this.questions1[i]) {
        this.questionid1 = Math.floor((Math.random() * 7) + 1).toString();
      }
     

    }
    if (this.questions.co == this.selectedLink) {
      this.score += 1;
      this.questions2.push(this.questionNumber+1);
     console.log(this.questions2);

    }
    this.data.getQuestionsById(this.questionid1).subscribe((res: any) => {
      this.questions = res.questions[0];
      //console.log(this.questions1);
      this.questions1.push(this.questionid1);
      this.questionNumber++;
    });
    if(this.questions1.length==7)
    {
      this.i=7;this.percentage=this.score/7*100;
      console.log(this.score);
    }
  }



  previous() {
    if (this.questionNumber <1) return;
    this.questionNumber = this.questionNumber - 1;
    this.questionid1 = this.questions1[this.questionNumber];
    //console.log(this.questionid1);
    
    //this.questionid1=Math.floor((Math.random() * 7) + 1).toString();
    this.data.getQuestionsById(this.questionid1).subscribe((res: any) => {
      this.questions = res.questions[0];
      //console.log(this.questionid1);

    });
  }
  setradio(e: string): void {
    this.selectedLink = e;
    //console.log(this.selectedLink);
  }

  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }

    return (this.selectedLink === name);
  }

}
