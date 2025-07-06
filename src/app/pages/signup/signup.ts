import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../services/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  constructor(private service: User,
    private router: Router
  ) { }
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    bio: '',
    address: '',
    password: '',
    agree: false

  };

  register() {
    this.service.setUser(this.user);
    console.log('User stored:', this.user);
    this.router.navigate(['/profile']);
  }

}
