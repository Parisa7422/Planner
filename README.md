# Planner Project

## Overview
This is a personal planning and productivity application developed in **React** and **Express**. It allows users to create and manage goals, notes, quotes, and other important items related to daily productivity. The project initially used **MongoDB** as a database but has since been refactored to use **in-memory mock data** for easier demonstration purposes.

## Features
- **User Authentication**: Users can register, log in, and manage their sessions.
- **Goals Management**: Add, edit, update, and delete personal goals.
- **Notes**: Create and manage notes to help keep track of various tasks and ideas.
- **Quotes Management**: Retrieve motivational quotes.
- **No Database Required**: The current version uses mock data, making it easier to run locally without additional database setup.

## Technologies Used
- **Frontend**: React, JavaScript, Bootstrap
- **Backend**: Node.js, Express
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Authentication**: JWT-based user authentication

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Parisa7422/Planner.git
   cd Planner
   ```

2. **Install Dependencies**
   - Navigate to both the server and client directories and install the dependencies.
   
   **For Server**
   ```bash
   npm install
   ```
   
   **For Client**
   ```bash
   cd client
   npm install
   ```

3. **Run the Application**
   - You can run both the client and server concurrently.
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - The client should be available at `http://localhost:3000`

## Usage

- **Register** or **Login** to access your planner.
- Create and manage **goals** to keep track of tasks.
- Add **notes** to motivate yourself and organize your thoughts.
- The data is stored temporarily, using in-memory mock data, so restarting the server will clear all information.

## Project Structure
- **client/**: Contains all React frontend code.
- **server/**: Contains the Express server code for handling API requests.
- **mock data**: Used to store goals, notes, and quotes in memory for demonstration purposes.

## Scripts
- **Start the Server**: `npm run server`
- **Start the Client**: `npm start --prefix client`
- **Run Both**: `npm run dev`

## Important Notes
- **Database Removal**: The project previously used MongoDB, but now runs completely with mock data for easier testing and demonstration.
- **Backend Routes**: The server exposes several routes under `/api/v1` for authentication, goals, notes, and quotes management.
- **Authentication**: JWT is used to protect routes. Since this version does not include a database, user data is not persisted.

## Contributing
Feel free to open issues or make pull requests if you find any bugs or think of improvements.

## Acknowledgments
- Inspired by productivity and planning apps to help individuals better organize their daily tasks.
- Originally developed as a learning project using MongoDB and later adapted to use mock data.

