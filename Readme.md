# Femicide Tracker Backend

The Femicide Tracker is a user-friendly web platform for tracking and documenting femicide cases 📊. This backend API manages femicide case data stored locally using XAMPP (Apache + MySQL/MariaDB).

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)

## Features

- RESTful API to manage femicide incident data  
- Data stored locally using MySQL via XAMPP  
- CRUD operations for femicide cases  
- Data validation and error handling  
- Query and filter femicide incidents

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MySQL / MariaDB** (via XAMPP)  
- **Sequelize** (or your preferred ORM/Query builder, please update if different)  
- Middleware for security, parsing, and logging  

## Installation

1. **Set up XAMPP:**  
   Install and run XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/) to set up your local Apache server and MySQL database.

2. Clone the repository:  
   ```bash
   git clone https://github.com/kkmanuu/femicide-tracker-backend.git
   cd femicide-tracker-backend

3. Install dependencies:
   ```bash
   npm install

4. Configure database:

    Create a MySQL database (e.g., femicide_tracker) using phpMyAdmin or MySQL CLI.

   Update your database credentials in the .env file:

   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=femicide_tracker
   PORT=3000
   JWT_SECRET=your_jwt_secret_key

5. Start the backend server:  
   ```bash
   npm start
6. Usage
    The API will be available at http://localhost:<PORT> (default port 3000).

    Use Postman or similar tools to interact with the endpoints to create, read, update, or delete femicide cases.

   API Endpoints
   
(Default port is `3000` unless otherwise specified in your `.env` file.)

Use **Postman**, **Insomnia**, or similar API testing tools to interact with the endpoints to **create**, **read**, **update**, or **delete** femicide case records.

---

## API Endpoints

| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| GET    | `/cases`       | Get all femicide cases       |
| GET    | `/cases/:id`   | Get details of a specific case |
| POST   | `/cases`       | Create a new femicide case   |
| PUT    | `/cases/:id`   | Update a specific case       |
| DELETE | `/cases/:id`   | Delete a specific case       |

> ⚠️ *Modify this section to match your actual implemented routes and parameters.*


## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.