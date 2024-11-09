# Setup Instructions

This project provides the backend API for the MicroCourses platform, built with Node.js, Express, and MongoDB.

## Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sameerbartaula/IATD-microcourses-frontend.git
cd IATD-microcourses-frontend
```

## Open the Project in VS Code
If you use VS Code, you can open the project directory by running:

```bash
code .
```

## Install Node.js

Ensure that Node.js is installed on your system. Download Node.js if it's not already installed. https://nodejs.org/en/download/package-manager 

## Install Project Dependencies
Install the necessary Node.js packages by running:

```bash
npm install
```

## Configure API URL
Before running the project, ensure that the frontend can connect to the backend API.
```bash
open services/api.jsx
```
Match the API_URL with the URL of your backend API. If the backend URL is different from http://localhost:5050, update the value accordingly.

## Start the frontend
To start the frontend, use:

```bash
npm start
```
#### The frontend should now be running at http://localhost:3000