import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedCourse: Course;

  readonly Api_url = 'http://localhost:3000/course'

  Courses: Course[];


  constructor(private http: HttpClient) {
    this.selectedCourse=new Course();

  }

  getCourses() {
    return this.http.get(this.Api_url);
  }

  postCourse(Course: Course) {
    return this.http.post(this.Api_url, Course);
  }

  putCourse(course: Course) {
    return this.http.put(this.Api_url + '/${Course._id}', course);
  }
  deleteCourse(_id: string) {
    return this.http.delete(this.Api_url + '/${_id}');
  }



}
