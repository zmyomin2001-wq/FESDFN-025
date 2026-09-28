import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  user = new User();

  users: User[] = [];

  successMessage = '';
  errorMessage = '';

  register() {
  this.successMessage = '';
  this.errorMessage = '';

  try {
    const emailExists = this.users.some(
      item =>
        item.userEmail.toLowerCase() ===
        this.user.userEmail.toLowerCase()
    );

    if (emailExists) {
      this.errorMessage = '422: Email already exists.';
      return;
    }

    if (!/^[0-9]+$/.test(this.user.userTel)) {
      this.errorMessage = '400: Telephone must contain numbers only.';
      return;
    }

    const newUser = Object.assign(new User(), this.user);

    newUser.getAge();

    this.users.push(newUser);

    this.successMessage = 'User registered successfully!';
    this.user = new User();

  } catch (error) {
    console.error(error);
    this.errorMessage = '500: An unexpected error occurred.';
  }
}}