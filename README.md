# production-interaction25
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/interactors2025/production-interaction25)

## Overview

This repository contains the source code for "Interaction 2025" / "NCI 25", a National Conference and event platform. The project is developed for the Progressive Education Society's Modern College Of Arts, Science & Commerce (Autonomous), Ganeshkhind, Pune, under the PM-USHA (Pradhan Mantri Uchchatar Shiksha Abhiyan) grants scheme.

The application facilitates event information, user registration (students and staff), an admin dashboard for management, and an attendance system for event coordinators.

## Features

*   **User Registration:** Separate registration for students and staff.
*   **Event Information:** Display of event details, schedule, and coordinator information.
*   **Admin Dashboard:**
    *   Secure admin login.
    *   View registered users and staff.
    *   Track event participation counts.
    *   Calculate total registration amounts.
    *   Export user and staff data to Excel.
    *   Search functionality for users and staff.
*   **Image Uploads:** Uses Cloudinary for storing user-uploaded images (e.g., transaction screenshots).
*   **Email Notifications:** Automated confirmation emails upon registration, using Bull for background queue processing.
*   **QR Code Generation:** Generates QR codes for registration details, included in confirmation emails.
*   **Attendance System:** Login portal for event coordinators to manage attendance.
*   **Responsive Frontend:** Built with React and Material-UI for accessibility across devices.
*   **Dockerized:** Fully containerized for easy deployment and scaling using Docker and Docker Compose.

## Tech Stack

*   **Frontend:**
    *   React
    *   Vite
    *   Material-UI
    *   Axios
    *   React Router
    *   Bootstrap
    *   CSS
*   **Backend:**
    *   Node.js
    *   Express.js
    *   Prisma (ORM for MongoDB)
    *   MongoDB (Database)
    *   Redis (Caching and Bull queue backend)
    *   JWT (Authentication)
    *   bcrypt (Password Hashing)
    *   Bull (Message Queue for background tasks like email sending)
    *   Nodemailer (Email Sending)
    *   Cloudinary (Image Storage)
    *   Winston (Logging)
    *   Zod (Schema Validation)
    *   Multer (File Uploads)
    *   QRCode (QR Code Generation)
    *   ExcelJS (Excel Export)
*   **DevOps & Deployment:**
    *   Docker
    *   Docker Compose
    *   Nginx (Web Server & Reverse Proxy)

## Project Structure

```
.
├── client/Frontend-main/ # React frontend application
│   ├── public/
│   └── src/
│       ├── Components/   # UI Components
│       ├── assets/       # Static assets
│       └── context/      # React Context
├── config/               # Backend configuration files
├── controllers/          # Backend route handlers
├── data/                 # Static data (e.g., coordinator credentials)
├── middleware/           # Express middleware
├── nginx/                # Nginx configuration files
├── prisma/               # Prisma schema and migrations
├── router/               # Express route definitions
├── services/             # Backend business logic
├── temp/                 # Temporary storage for uploads
├── utils/                # Utility functions and helpers
├── validator/            # Zod validation schemas
├── Dockerfile.backend    # Dockerfile for the backend service
├── Dockerfile.frontend   # Dockerfile for the frontend service
├── docker-compose.yml    # Docker Compose configuration
├── app.js                # Express application setup
├── server.js             # Backend server entry point
└── package.json          # Backend dependencies
```

## Getting Started

### Prerequisites

*   Node.js (v18+ for frontend build, v22 for backend recommended)
*   npm or yarn
*   Docker
*   Docker Compose
*   MongoDB instance
*   Redis instance

### Installation & Running (Docker - Recommended for Full Stack)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/interactors2025/production-interaction25.git
    cd production-interaction25
    ```

2.  **Create Environment File:**
    Create a `.env` file in the root of the project and populate it with the necessary environment variables. See the [Environment Variables](#environment-variables) section below for required keys.
    Example `.env` structure:
    ```env
    PORT=6789
    DATABASE_URL="mongodb://your_mongodb_connection_string"
    CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    JWT_SECRET="your_jwt_super_secret_key"
    JWT_EXPIRATION="1h"
    EMAIL_USER="your_email@example.com"
    EMAIL_PASS="your_email_password"
    NODE_ENV="development" # or "production"
    ```

3.  **Build and run services with Docker Compose:**
    ```bash
    docker-compose up -d --build
    ```

4.  **Access the application:**
    *   Frontend: `http://localhost:3000` (served by Nginx in `frontend` service, which is then exposed via the main Nginx service if configured for it, or directly if host port 3000 points to frontend's Nginx)
    *   Backend API: `http://localhost:6789`

    The `docker-compose.yml` maps port 80 of the host to the main `nginx` service, which then proxies to the frontend and backend. The `frontend` service itself uses Nginx and is mapped to host port 3000.

### Running Frontend and Backend Separately (Development)

#### Backend

1.  Navigate to the project root:
    ```bash
    cd production-interaction25
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up your `.env` file as described above.
4.  Ensure MongoDB and Redis services are running and accessible.
5.  Generate Prisma client:
    ```bash
    npx prisma generate
    ```
6.  Synchronize your database schema (if using Prisma Migrate, otherwise ensure MongoDB schema matches):
    ```bash
    npx prisma db push # For development, or use migrations for production
    ```
7.  Start the backend development server:
    ```bash
    npm run dev
    ```
    The backend will typically run on `http://localhost:6789`.

#### Frontend

1.  Navigate to the frontend directory:
    ```bash
    cd client/Frontend-main
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  (Optional) If the frontend requires specific environment variables (e.g., for API base URL), create a `.env` file in `client/Frontend-main`.
4.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The frontend will typically run on `http://localhost:5173`.

## Environment Variables

The backend requires the following environment variables (to be placed in a `.env` file in the root directory):

*   `PORT`: Port for the backend server (e.g., `6789`)
*   `DATABASE_URL`: MongoDB connection string (e.g., `mongodb://localhost:27017/interaction25`)
*   `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
*   `CLOUDINARY_API_KEY`: Your Cloudinary API key.
*   `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
*   `JWT_SECRET`: Secret key for JWT signing.
*   `JWT_EXPIRATION`: JWT expiration time (e.g., `1h`, `7d`).
*   `EMAIL_USER`: Gmail address for sending confirmation emails.
*   `EMAIL_PASS`: Gmail app password or account password for `EMAIL_USER`.
*   `NODE_ENV`: Application environment (`development` or `production`).

Redis connection details are currently hardcoded in `utils/redisClient.js` to connect to `localhost:6379`. For Docker Compose, the `redis` service name is used by the backend.

## Dockerization

The application is fully dockerized for consistent environments and easy deployment:

*   **`Dockerfile.backend`**: Defines the Docker image for the Node.js backend. It installs dependencies, generates the Prisma client, and starts both Redis (daemonized within the container for standalone runs) and the Node application.
*   **`Dockerfile.frontend`**: A multi-stage Dockerfile.
    *   Stage 1: Builds the React/Vite application.
    *   Stage 2: Uses an Nginx image to serve the built static files.
*   **`docker-compose.yml`**: Orchestrates the deployment of multiple services:
    *   `backend`: Runs the Node.js backend application.
    *   `frontend`: Runs the Nginx server to serve the React frontend.
    *   `redis`: Runs a Redis instance for caching and message queuing.
    *   `nginx`: A main Nginx instance acting as a reverse proxy, routing traffic to the frontend and backend services.

## API Endpoints Summary

The backend exposes RESTful APIs under the `/api/v1` prefix:

*   **`/api/v1/user`**:
    *   `POST /register`: Student registration.
    *   `POST /register-staff`: Staff registration.
    *   `GET /healthCheck`: System health status.
*   **`/api/v1/admin`**:
    *   `POST /admin-login`: Admin login.
    *   `GET /count`: Get event participation and staff counts.
    *   `GET /amount`: Get total collected registration amount.
    *   `GET /users`, `GET /staff`: Fetch all registered users or staff.
    *   `GET /latestUsers`, `GET /latestStaff`: Fetch the 10 most recently registered users/staff.
    *   `POST /sendMail`: (Likely an internal or admin-triggered endpoint for sending emails, though emails are also queued upon registration).
    *   `GET /export/users/excel`, `GET /export/staff/excel`, `GET /exportEventToExcel`: Export data to Excel files.
    *   `GET /searchByMobileUser`, `GET /searchByMobileStaff`: Search users/staff by mobile number.
*   **`/api/v1/attendance`**:
    *   `POST /attendanceLogin`: Login for event coordinators to manage attendance.

Refer to `router/` directory for detailed route definitions and associated controllers.

## Key Scripts

### Backend (root `package.json`)

*   `npm start`: Starts the backend server for production (`node server.js`).
*   `npm run dev`: Starts the backend server in development mode with Nodemon.

### Frontend (`client/Frontend-main/package.json`)

*   `npm run dev`: Starts the Vite development server for the frontend.
*   `npm run build`: Builds the frontend application for production.
*   `npm run lint`: Lints the frontend code.
*   `npm run preview`: Serves the production build locally.

## License

This project is licensed under the terms specified in the `LICENSE` file.
