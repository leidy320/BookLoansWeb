import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'student',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
