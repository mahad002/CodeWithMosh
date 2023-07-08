import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directive-main.component.html',
  styleUrls: ['./directive-main.component.css']
})
export class DirectiveMainComponent {
  
  title = 'Directives';

  //ngif ngfor ngswitchcase 
  courses!: {
    id: number,
    name: string
  }[];
  tempCourses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];

 viewMode = 'map';
 
 loadCourses() {
   this.courses = [
     { id: 1, name: 'course1' },
     { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }
  
  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }

  //ngclass ngstyle
  isActive: boolean = false;
  toggle() {
    this.isActive = !this.isActive;

  }

  


}
