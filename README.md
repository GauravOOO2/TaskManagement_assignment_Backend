# Task Management Application

## Overview

This Task Management Application is a full-stack web application designed to help users organize and track their tasks efficiently. It provides a user-friendly interface for creating, updating, and deleting tasks, as well as marking them as complete.

## Features

- Create new tasks with title, description, due date, and category
- View a list of all tasks
- Edit existing tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks by category or completion status
- Sort tasks by due date or creation date

## Technology Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Testing: Jest, Supertest

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - In the `backend` directory, create a `.env` file with the following content:
     ```bash
     MONGO_URL=your_mongodb_connection_string
     PORT=5000
     ```
   - In the `frontend` directory, create a `.env.local` file with:
     ```bash
     NEXT_PUBLIC_API_URL=http://localhost:5000/api
     ```

### Running the Application Locally

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/tasks`: Retrieve all tasks
- `POST /api/tasks`: Create a new task
- `GET /api/tasks/:id`: Retrieve a specific task
- `PUT /api/tasks/:id`: Update a specific task
- `DELETE /api/tasks/:id`: Delete a specific task

## Testing

To run the backend tests:

```bash
cd backend
npm test
```


## Deployment

This application can be deployed using platforms like Vercel for the frontend and backend. Make sure to set the appropriate environment variables in your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
