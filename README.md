# User Management CRUD Application

## Overview
This Node.js and Express.js application provides CRUD (Create, Read, Update, Delete) functionalities for managing user data in a MongoDB database. Users can be created, read, updated, and deleted through a user-friendly web interface built with EJS templates and styled with CSS.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **EJS (Embedded JavaScript)**: Templating engine for generating HTML with plain JavaScript.
- **MongoDB**: NoSQL database for storing user data.
- **CSS**: Cascading Style Sheets for styling the application.

## Features
- **Create**: Add new users with details like name, email, and other relevant information.
- **Read**: Display existing user information in a user-friendly format.
- **Update**: Modify user details such as name, email, and any other user-specific data.
- **Delete**: Remove users from the database.

## Installation and Setup
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd crud_app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up MongoDB**:
   - Ensure MongoDB is installed and running locally or provide a MongoDB Atlas URI.

4. **Environment variables**:
   - Create a `.env` file in the root directory and add:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     ```

5. **Start the application**:
   ```
   npm start
   ```

6. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Navigate through the interface to create, view, update, and delete user records.
- Ensure MongoDB is running and accessible for data storage and retrieval.
