import { Component } from '@angular/core';
import { every } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses"> 
                        {{ course }}
                    </li>
                </ul>
                <div  [style.backgroundColor]="color"  (click)="onDivClicked()" > {{text}}

                  <!-- //good two way binding -->
                <input  [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
                <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' :'green' " (click)="btnClicked()">Save</button>


                </div>
                
                `
})
//                  //bad two way binding
//                 <input  [(ngModel)]="email" (keyup.enter)="email=$event.target.value;onKeyUp()" />

export class CourseComponent {
    title = "List of courses";
    courses: string[] | undefined;
    isActive: boolean = true;
    padding: string = "20px";
    color: string = "red";
    colors: string[] = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "grey"];
    colorIndex: number = 0;
    text : string = "Good";
    email : string = "";

    getTitle() {
        return this.title;
    }
    constructor(service: CourseService) {
        this.courses = service.getCourses();
    }

    onKeyUp() {
        event?.stopPropagation();
        console.log(this.email);
        this.courses?.push(this.email);

    }

    btnClicked() {
        event?.stopPropagation();
        this.isActive = !this.isActive;
        this.courses?.push(this.email);
    }
    onDivClicked() {
        console.log("Div was clicked");
        this.color = this.colors[this.colorIndex];
        this.colorIndex++;
        if (this.colorIndex == this.colors.length) {
            this.colorIndex = 0;
        }
        if(this.color=="pink")
        {
            this.text="Bad";
        }
        else
            this.text="Good";
    }



}