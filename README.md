# Refresh Todo - Full Stack Interview Exercise

## Overview

Refresh Todo is a full-stack web application built with React.js, Express.js, Node.js, and PostgreSQL as the database. We use it at Refresh as part of our technical interview process for Full Stack Software Engineer candidates.

## Features

- **User-friendly Interface**: Intuitive and responsive UI powered by React.js.
- **Server-side Logic**: Efficient server-side handling using Express.js and Node.js.
- **Database Integration**: Seamless integration with PostgreSQL for data storage.
- **Task CRUD Operations**: Perform Create, Read, Update, and Delete operations on tasks.
- **NPM Scripts**: Convenient npm scripts for easy project setup and execution.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL
- **Package Manager**: npm

## Project Structure

```plaintext
task-traverser/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── sql/
│   └── database.sql
│
├── .gitignore
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/task-traverser.git
   cd task-traverser
   ```

2. **Install Dependencies:**
   - For Client:
     ```bash
     cd client
     npm install
     ```

   - For Server:
     ```bash
     cd server
     npm install
     ```

3. **Database Setup:**
   - Execute the SQL script in `sql/database.sql` to create the necessary database and table.

4. **Environment Variables:**
   - Update the `.env` file in the `server` directory with your PostgreSQL connection details.

     ```plaintext
     DB_HOST=localhost
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_DATABASE=your_database
     DB_PORT=5432
     ```

5. **Run the Application:**
   - For Client:
     ```bash
     cd client
     npm start
     ```

   - For Server:
     ```bash
     cd server
     npm start
     ```

6. **Open in Browser:**
   - Open your browser and navigate to `http://localhost:3000` to access the Refresh Todo application.

## NPM Scripts

- **Client:**
  - `npm start`: Start the React development server.
  - `npm build`: Build the production-ready React app.

- **Server:**
  - `npm start`: Start the Express.js server.

Contributions to Refresh Todo are welcome! Feel free to open issues, submit pull requests, or suggest improvements.

Happy interviewing! 🚀📝
