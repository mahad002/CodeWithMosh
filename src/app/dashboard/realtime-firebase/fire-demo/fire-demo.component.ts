import { Component } from '@angular/core';
import { environment } from 'environment/environment';
import { initializeApp } from 'firebase/app';
import { ref, child, onValue, push, off, set, remove, getDatabase } from 'firebase/database';

const app = initializeApp(environment.firebase);
const database = getDatabase(app);

@Component({
  selector: 'fire-demo',
  templateUrl: './fire-demo.component.html',
  styleUrls: ['./fire-demo.component.css']
})
export class FireDemoComponent {
   // const storage = getStorage(app);
   courses: any[] = [];

   constructor() {
     //get list of courses
     const dbRef = ref(database);
 
     //for getting value only once, wont refresh if data changes
 
     // get(child(dbRef, `course`)).then((snapshot) => {
     //   if (snapshot.exists()) {
     //     console.log(snapshot.val());
     //     this.courses = snapshot.val();
     //   } else {
     //     console.log("No data available");
     //   }
 
     // }
     // ).catch((error) => {
     //   console.error(error);
     // }
     // );
     const courseRef = child(dbRef, `course/`);
 
     //for getting value everytime a value changes
 
     onValue(courseRef, (snapshot) => {
       //assign list of courses to courses array
       const data = snapshot.val();
       console.log(data);
       this.courses = Object.entries(data).map(([key, value]) => ({ key, value }));
       console.log(this.courses);
     });
 
 
   }
 
   addCourse(course: HTMLInputElement) {
     console.log(course.value);
     const dbRef = ref(database);
     const newCourseRef = child(dbRef, 'course');
     // const newCourse = {
     //   name: course.name,
     //   price: course.price,
     //   description: course.description,
     //   isAvail: course.isAvail
     // };
     //set(newCourseRef, course.value);
     // add object 
     push(newCourseRef, course.value);
   }
 
   ngOnDestroy() {
     off(ref(database, `course`));
   }
 
   updateCourse(course: any) {
     console.log(course);
     const dbRef = ref(database);
     const courseRef = child(dbRef, `course/${course.key}`);
     const updatedValue = course.value + "updated";
 
     //using set will replace the whole object
     set(courseRef, updatedValue);
 
     //using update will update only the fields that are passed
   //  update(courseRef, { value: updatedValue });
   }
 
   deleteCourse(course: any) {
     console.log(course);
     const dbRef = ref(database);
     const courseRef = child(dbRef, `course/${course.key}`);
     remove(courseRef);
   }

}
