import { Component } from '@angular/core';
import { Students } from './page-student.model';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';
import { FormStudentssComponent } from './components/form-studentss/form-students.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  public students: Students[]=[];
  displayedColumns: string[] = ['id','nameStudent','identificationDocument', 'program', 'actions'];
  public dataSource: Students[]=[];
  clickedRows = new Set<Students>();

  constructor(private studentsService: StudentsService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(response => {
      this.students = response;
      this.dataSource= this.students;
    });
  }

  openDialog() {
    const config = {
      height: '400px',
      width: '300px',
    }
    this.dialog.open(FormStudentssComponent, config);
  }

  deleteStudent(student: Students) {
    console.log('Delete student', student);
    this.studentsService.deleteStudents(student.id).subscribe(() => {
      this.students = this.students.filter(s => s.id !== student.id);
      this.dataSource = this.students;
  })
 }
  editStudent(student: Students) {
    console.log('Edit student', student);
    const config = {
      data: student,
      height: '400px',
      width: '300px',
    }
    this.dialog.open(FormStudentssComponent, config);
  }

}
