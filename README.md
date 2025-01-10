# MERN Stack Zerodha Clone

This is a MERN stack implementation of a Zerodha-like trading application, designed for account creation, user authentication, and trading through a dashboard. The project is structured into three parts: **Frontend**, **Backend**, and **Dashboard**, each serving a specific purpose.

---

## Project Overview
- **Frontend (Port: 3000):** A React.js application that serves as the Zerodha landing page.
- **Dashboard (Port: 3001):** A React.js-based clone of the Kite trading dashboard.
- **Backend (Port: 8080):** A Node.js and Express.js server connected to MongoDB Atlas for authentication and data management.

---

## Technologies Used
1. **Frontend**: React.js
2. **Dashboard**: React.js
3. **Backend**: Node.js, Express.js, MongoDB Atlas

---

## Installation and Setup
### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/mern-zerodha-clone.git
cd mern-zerodha-clone


# MERN Stack Zerodha Clone

This project is a MERN stack implementation of a Zerodha-like trading application, designed for account creation, user authentication, and trading through a dashboard.

---

## Project Overview
The project is structured into three main parts:
1. **Frontend (Port: 3000):** A React.js application serving as the Zerodha landing page.
2. **Dashboard (Port: 3001):** A React.js-based Kite trading dashboard clone.
3. **Backend (Port: 8080):** A Node.js and Express.js server connected to MongoDB Atlas for authentication and data storage.

---

## Technologies Used
- **Frontend**: React.js
- **Dashboard**: React.js
- **Backend**: Node.js, Express.js, MongoDB Atlas

---

## Installation and Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/mern-zerodha-clone.git
cd mern-zerodha-clone

###Step 2: Backend Setup
#### 1.Navigate to the backend folder:
bash

cd backend

#### 2. Create a .env file with the following content:
env

MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret>
PORT=8080

#### 3. Install dependencies and start the server:
bash

npm install
npm start

### Step 3: Frontend Setup
#### 1.Navigate to the frontend folder:
bash

cd ../frontend

#### 2.Install dependencies and start the development server:
bash

npm install
npm start

### Step 4: Dashboard Setup
#### 1.Navigate to the dashboard folder:
bash

cd ../dashboard
#### 2. Install dependencies and start the development server:
bash

npm install
npm start

##API Endpoints
The backend provides the following API endpoints:

### Authentication
 POST /api/signup: Create a new user.
 POST /api/login: Log in an existing user.

### User Data
 GET /api/user: Retrieve authenticated user details.

###Ports Used
Frontend: 3000
Dashboard: 3001
Backend: 8080


## Environment Variables
Environment variables are stored in .env files. Below is an example for the backend:

env

MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret>
PORT=8080
Each folder can have its own .env file if needed for additional configurations.


## Future Enhancements
WebSocket Integration: Real-time updates for trading activities.
Rate Limiting: Secure APIs from abuse.
Enhanced UI: Improve user experience and responsiveness.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
