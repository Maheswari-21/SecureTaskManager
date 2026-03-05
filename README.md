## SecureTaskManager

A full-stack task management web application built with the MERN stack. The application allows users to securely register, log in, and manage their daily tasks with authentication and protected routes.

## Features

User Registration and Login

JWT Authentication

Secure Password Hashing using bcrypt

Create Tasks

Update Tasks

Delete Tasks

Task Status Tracking (Pending / Completed)

Protected Dashboard Routes

REST API Architecture

## Tech Stack
Frontend

React

Axios

CSS

Backend

Node.js

Express.js

MongoDB

JWT Authentication

bcrypt

## Project Structure

```
SecureTaskManager
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   └── server.js
│
├── frontend
│   ├── src
│   └── public
│
└── README.md
```

## Installation

### 1. Clone Repository

git clone https://github.com/Maheswari-21/securetaskmanager.git

### 2. Backend Setup

cd backend  
npm install  
npm run dev  

### 3. Frontend Setup

cd frontend  
npm install  
npm start  

## API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/tasks         | Get all tasks |
| POST   | /api/tasks         | Create task   |
| PUT    | /api/tasks/:id     | Update task   |
| DELETE | /api/tasks/:id     | Delete task   |


## Application will run on:

Backend  
http://localhost:5000

Frontend  
http://localhost:3000

## Screenshots

Login Page  
![Login](screenshots/login.png)

Register Page  
![Register](screenshots/register.png)

Dashboard  
![Dashboard](screenshots/dashboard.png)

## Author

Maheswari
GitHub: https://github.com/Maheswari-21
