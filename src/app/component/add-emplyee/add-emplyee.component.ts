import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-emplyee',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './add-emplyee.component.html',
  styleUrl: './add-emplyee.component.css'
})
export class AddEmplyeeComponent {


  constructor(private router:Router){

  }
  navigateTo(){
    this.router.navigateByUrl("/data")

  }

}
