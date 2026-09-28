
# FESD-FN-025

## Project Description
This is an Angular 22 user registration project developed with Bootstrap 5 for the Front-End Software Development lab exam.

## Features
- User registration form with required field validation
- Email and password validation
- Telephone number validation
- Date of birth validation and age calculation
- Duplicate email checking
- Success and error messages
- Responsive registered users table

## Technologies
- Angular 22
- TypeScript
- Bootstrap 5
- Vitest

## Run the Project
```bash
npm install
ng serve
```

Open http://localhost:4200/ in your browser.

## Run Unit Tests
```bash
ng test --watch=false
```

The project includes 12 unit tests, including 10 age calculation tests using May 20, 2024 as the reference date.

## Test Report
The unit test result screenshot is available in the `test-report` folder.

## Note
The registration and error status messages are currently simulated in the frontend. No backend API is connected.