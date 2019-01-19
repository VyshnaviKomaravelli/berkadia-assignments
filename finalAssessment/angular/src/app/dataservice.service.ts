import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url1="http://localhost:3000/questions/";
  constructor(private readonly http:HttpClient) { }
  getQuestions():any
{
  return this.http.get(this.url1);
}
getQuestionsById(id:string){
  return this.http.get(this.url1+id);
}
}
