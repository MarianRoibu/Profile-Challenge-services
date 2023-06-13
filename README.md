Profile-Challenge-services
This repository contains the backend services for the Profile Challenge.

Table of Contents
Getting Started
Prerequisites
Installation
Usage
Technologies
Environment Variables
License
Getting Started
To run the backend services, follow the steps below:

Prerequisites
Make sure you have the following installed on your machine:

Node.js
npm

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/Profile-Challenge-services.git

Navigate to the project directory:

bash
Copy code
cd Profile-Challenge-services

Install dependencies:

bash
Copy code
npm install

Start the server:

bash
Copy code
npm start
The backend services will be running on http://localhost:4000.

Usage
The backend services provide APIs for user management and authentication. These services are used by the frontend application.

Technologies
The backend services are built using the following technologies:

Node.js
Express.js
MongoDB
Mongoose
Cloudinary

Environment Variables
The following environment variables are required for the backend services:

PORT: The port number for the server (default: 4000).
MONGODB_URI: The MongoDB connection URI.
AUTH0_AUDIENCE: The Auth0 API audience.
AUTH0_ISSUER: The Auth0 issuer.
CLOUDINARY_URL: The Cloudinary secret key.
AUTH0_CLIENT_ID: The Auth0 client ID.
Create a .env file in the root directory of the backend services and add these variables.


License
This project is licensed under the MIT License.