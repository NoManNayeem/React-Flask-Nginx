# React-Flask-Nginx Project

## Overview
This project demonstrates how to host a React frontend and Flask backend using Nginx as a reverse proxy. The services are containerized using Docker and managed with Docker Compose.

- **Frontend**: React (with Material-UI for enhanced UI)
- **Backend**: Flask (with multiple RESTful API endpoints)
- **Reverse Proxy**: Nginx
- **Containerization**: Docker
- **Repository**: [GitHub Repo](https://github.com/NoManNayeem/React-Flask-Nginx.git)

## Project Structure
```
react-flask-nginx/
│
├── backend/               # Flask app directory
│   ├── app.py
│   ├── requirements.txt
│   ├── Dockerfile
│
├── frontend/              # React app directory
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│
├── nginx/                 # Nginx configuration
│   ├── default.conf
│   ├── Dockerfile
│
├── docker-compose.yml     # Compose file to run all services
└── README.md
```

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Node.js
- Python

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/NoManNayeem/React-Flask-Nginx.git
   cd React-Flask-Nginx
   ```

2. **Set Up Backend**
   - Navigate to the `backend` folder:
     ```sh
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```sh
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install dependencies:
     ```sh
     pip install -r requirements.txt
     ```

3. **Set Up Frontend**
   - Navigate to the `frontend` folder:
     ```sh
     cd ../frontend
     ```
   - Install dependencies:
     ```sh
     npm install
     ```

4. **Build and Run Using Docker Compose**
   - Navigate back to the root directory:
     ```sh
     cd ..
     ```
   - Build and start the services:
     ```sh
     docker-compose up --build
     ```

5. **Access the Application**
   - The application will be available at `http://localhost:8080`.

## API Endpoints

### Flask Backend
- **GET /api/**: Returns a welcome message.
- **GET /api/users**: Returns a list of all users.
- **POST /api/users**: Creates a new user (expects JSON with `name` and `email`).
- **GET /api/users/<user_id>**: Returns a specific user by ID.
- **DELETE /api/users/<user_id>**: Deletes a specific user by ID.

## React Frontend
- The React frontend uses Material-UI for styling and provides an interface to interact with the Flask backend.
- Features:
  - Welcome message from Flask backend.
  - List of users fetched from Flask.
  - Button for additional interaction.

## Nginx Configuration
- Acts as a reverse proxy to route requests to the React frontend and Flask backend.
- `/api` requests are routed to the Flask backend.
- All other requests are routed to the React frontend.

## Docker Compose Services
- **flask-backend**: Hosts the Flask application on port 5000.
- **react-frontend**: Hosts the React application on port 3001 (internally mapped to port 80).
- **nginx**: Hosts Nginx on port 8080, serving as the reverse proxy.

## Improvements Made
- Enhanced UI in the React app using Material-UI components.
- Added RESTful API endpoints in Flask for better demonstration of backend capabilities.

## Troubleshooting
- **Port Conflicts**: Make sure that ports `5000`, `3001`, and `8080` are not being used by other services on your machine.
- **CORS Issues**: CORS is enabled in the Flask app using `Flask-CORS` to handle cross-origin requests from React.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Author
- GitHub: [NoManNayeem](https://github.com/NoManNayeem)

## Contribution
Feel free to submit a pull request or open an issue if you want to contribute to the project.