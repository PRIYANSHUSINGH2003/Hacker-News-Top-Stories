# Hacker News Top Stories App

## Overview

The Hacker News Top Stories App is a simple web application that fetches and displays the top 10 stories from Hacker News using a FastAPI backend and a React frontend. The application provides a clean and professional interface for users to view trending stories with details such as title, author, score, and time of creation.

## Features

- Fetches top 10 stories from the Hacker News API.
- Displays story details including title, author, score, and time.
- Responsive and visually clean UI.
- Error handling for API request failures.

## Technologies Used

- **Frontend**: React.js
- **Backend**: FastAPI
- **Styling**: CSS
- **API**: Hacker News API

## Getting Started

[Uploading Screen Recording - Made with FlexClip.webm…]()

### Prerequisites

- Node.js and npm (for React frontend)
  
- Python and pip (for FastAPI backend)

### Backend Setup

1. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

2. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

   The backend server will be running at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the required Node.js packages:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

   The frontend application will be running at `http://localhost:3000`.

### API Endpoints

- **GET /top-stories**: Fetches the top 10 stories from Hacker News. 

### Error Handling

The application includes error handling for network issues and API request failures, displaying appropriate messages to the user.

## Bonus Features

- **README.md**: This file provides setup instructions and project details.
- **Tests**: Unit and integration tests are included for both the frontend and backend.
- **Containerization**: Dockerfiles for containerizing both the FastAPI backend and React frontend.
- **Environment Variables**: Configured using `.env` files.
- **Logging**: Basic logging is implemented for tracking application operations.

## Project Structure

- `backend/`: Contains the FastAPI backend code.
- `frontend/`: Contains the React frontend code.
- `Dockerfile`: Dockerfile for containerizing the backend.
- `frontend/Dockerfile`: Dockerfile for containerizing the frontend.
- `requirements.txt`: Python package dependencies for the backend.
- `package.json`: Node.js package dependencies for the frontend.
- `.env`: Environment-specific settings.

## Contributing

If you want to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that you follow the coding standards and include tests for any new features or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [priyanshusingh00004@gmail.com](mailto:priyanshusingh00004@gmail.com).
