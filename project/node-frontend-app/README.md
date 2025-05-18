# Node.js Backend Application with React Frontend

This project is a full-stack application that consists of a Node.js backend for user registration and student management, along with a React.js frontend styled with Tailwind CSS.

## Project Structure

```
node-frontend-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── Register.jsx
│   │   ├── Students.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── tailwind.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd node-frontend-app
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up Tailwind CSS:

   Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for additional setup instructions.

### Running the Application

To start the development server, run:

```
npm start
```

This will start the React application on `http://localhost:3000`.

### Features

- User Registration: Users can register through the registration form.
- User Login: Users can log in to access their account.
- Student Management: View a list of registered students.

### Built With

- React.js
- Tailwind CSS
- Node.js
- Express.js
- Sequelize
- MySQL

### Author

Your Name

### License

This project is licensed under the ISC License.