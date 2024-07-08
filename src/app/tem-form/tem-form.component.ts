import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tem-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './tem-form.component.html',
  styleUrl: './tem-form.component.css'
})
export class TemFormComponent {
  studentsData:any={
    name:"",
    lastName:"",
    userName:"",
    city:"",
    state:"",
    zip:"",
    isAcceptTerm:false

  }
  Submit(event: Event) {
    event.preventDefault();
    console.log(this.studentsData);
  }

}
