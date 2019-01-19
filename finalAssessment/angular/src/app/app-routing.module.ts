import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', component:QuestionsComponent,  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
