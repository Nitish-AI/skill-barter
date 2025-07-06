import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  email: string = '';
  password: string = '';
  remember: boolean = false;

  login() {
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    console.log("Remember me:", this.remember);
  }

}
