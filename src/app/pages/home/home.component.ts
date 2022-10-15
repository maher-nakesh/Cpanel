 import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CourseService]
})
export class HomeComponent implements OnInit {

  constructor(public Courseservice:CourseService) { }

  ngOnInit(): void {
  }
  addCourse(form:NgForm){
this.Courseservice.postCourse(form.value)
.subscribe(res =>{
   alert("course added successfully!!")
})
}


}


