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
![image](https://github.com/user-attachments/assets/575f1f92-1afd-4f42-a0fb-de95e62805e8)
![Screenshot 2024-09-13 200700](https://github.com/user-attachments/assets/4110d5c5-f767-40a8-94a3-1d45a2556e0c)

### Prerequisites

- Node.js and npm (for React frontend)
  ![Screenshot 2024-09-13 200822](https://github.com/user-attachments/assets/68863f09-3f75-4358-ab41-615026cdbd0f)

- Python and pip (for FastAPI backend)
  ![image](https://github.com/user-attachments/assets/9af0944e-6598-4c60-85a0-4d180a161c47)

### Backend Setup

1. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

2. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```
  ![image](https://github.com/user-attachments/assets/e13e5578-9187-47d6-b83c-23802b188e0f)

   The backend server will be running at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd hackernews-frontend
    ```
  ![image](https://github.com/user-attachments/assets/c2fa2522-d131-4820-ad8c-1a14aae74e1d)

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
![Screenshot 2024-09-13 220752](https://github.com/user-attachments/assets/83d05323-ce7e-47fb-97c3-1822f5453a7f)

### Error Handling

The application includes error handling for network issues and API request failures, displaying appropriate messages to the user.
![image](https://github.com/user-attachments/assets/72bfb55c-2668-40c0-b865-671b30734d79)

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
