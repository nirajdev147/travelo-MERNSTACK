# Travelo - Tour Booking Website

## Overview

**Travelo** is a simple **tour booking website** built using the **MERN stack**:

- **MongoDB**: Database for storing user and booking information.
- **Express.js**: Backend framework to build RESTful APIs.
- **React**: Frontend framework to display the UI and interact with the backend.
- **Node.js**: Runtime environment for running the backend server.

This project allows users to browse available tours, make bookings, and manage their profiles.

**Note:** This project is cloned from a Online resources for educational purposes as part of a college project. The purpose is to understand and implement the MERN stack in building a full-stack web application.


## Features

- **User Authentication**: Sign up, log in, and log out with JWT-based authentication.
- **Tour Listings**: View available tours with detailed information.
- **Booking System**: Users can book a tour and view their bookings.
- **Profile Management**: Users can view their profile information.
- **Responsive UI**: Built with React and styled with CSS for a clean, responsive design.
- **MongoDB**: Persistent data storage for users, tours, and bookings.

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Set up MongoDB locally](https://www.mongodb.com/docs/manual/installation/) or use a cloud service like
  [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **npm** or **yarn**: For installing dependencies.

## Installation & Setup

### 1. Clone the repository

1. Open your terminal or command prompt and run the following command to clone the repository:

   1. git clone https://github.com/nirajdev147/travelo-MERNSTACK.git
   2. cd travelo-MERNSTACK

2. Set up the frontend(client) & backend (server)
    
    1. cd frontend & npm install
    2. cd backend & npm install
  

3. Create a .env file in the backend directory and add the following environment variables:

   1. PORT = 4000
   2. MONGO_URI=<enter_your_mongodb_uri_string_here>
   3. JWT_SECRET=<enter_your_jwt_secretkey_here>

4. Start the Backend development server using "npm run start-dev"

5. Start the Frontend development client using "npm run start"
