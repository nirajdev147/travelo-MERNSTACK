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

# API Testing Guide

## Overview
This project provides an API that you can test locally to explore its functionality. This guide will walk you through how to set up the environment and use **Postman** to test the API endpoints effectively.

## Prerequisites

- **Postman**: You will need Postman to interact with and test the API. If you don't have it installed, download it from [Postman Download](https://www.postman.com/downloads/).
- **API Server**: Ensure your API server is running locally.  Node.js framework, make sure it's up and running before testing.

## 1. Install Postman
To start testing, download and install Postman from the official site:  
[Download Postman](https://www.postman.com/downloads/)

## 2. Start the API Server

Before you can test the API, ensure the server is running on your local machine. Depending on your setup, use the following commands:


## 3. Create and Send Requests in Postman

Open Postman and create a new request to interact with the API.

## GET Request Example:
**URL**     : http://localhost:5000/api/v1/your-endpoint
**Method**  : GET


## POST Request Example:
**URL**     : http://localhost:5000/api/v1/your-endpoint
**Method**  : POST
**Body**    : Select raw, then choose JSON format, and enter your data as follows:

{
  "key": "value"
}

## Note: Go through the following code to create a new request this is just a simple example of how to create a new request in Postman.


## Inspect the Response
After sending the request, Postman will display the API's response, including:

**Status code**      : Indicates whether the request was successful (e.g., 200 OK, 404 Not Found).
**Response body**    : The data returned by the API.
**Response headers** : Metadata related to the request and response.


## Save and Organize Requests
To make future testing more efficient, save your requests in Postman:

1. Click Save after sending a request.
2. Organize your requests into Collections for easy access and quick testing.

## Happy testing! 🎉