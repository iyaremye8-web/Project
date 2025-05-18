# Node.js Backend Application

This project is a Node.js backend application that allows users to register an account using an email and password, store the data in a MySQL database, and manage student records through a dashboard interface.

## Features

- User registration and login functionality
- Dashboard for logged-in users
- CRUD operations for managing students and their marks
- Logout feature

## Project Structure

```
node-backend-app
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   └── studentController.js
│   ├── models
│   │   ├── user.js
│   │   ├── student.js
│   │   └── mark.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   └── studentRoutes.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── config
│   │   └── db.js
│   └── app.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd node-backend-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

- Update the database configuration in `src/config/db.js` to connect to your MySQL database.

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the API endpoints as per the defined routes in the application.

## API Endpoints

- **Authentication**
  - POST `/api/auth/register` - Register a new user
  - POST `/api/auth/login` - Login an existing user

- **Dashboard**
  - GET `/api/dashboard` - Access the dashboard
  - POST `/api/dashboard/logout` - Logout the user

- **Students**
  - POST `/api/students` - Create a new student
  - GET `/api/students` - Retrieve all students
  - GET `/api/students/:id` - Retrieve a specific student
  - PUT `/api/students/:id` - Update a specific student
  - DELETE `/api/students/:id` - Delete a specific student

## License

This project is licensed under the MIT License.