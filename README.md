🥤 Vending Machine – Full Stack Web Application

A full-stack vending machine management system built with React, Node.js, Express, MySQL, and JWT authentication.
Users can view products, make purchases (extend later), and admins can add/manage items securely.

🚀 Features

👤 Authentication

User Registration (bcrypt hashed passwords)

User Login with JWT

Protected routes using middleware

Role-based access:

Admin: Can add products

User: Can view products




🛒 Product Management

Add new products (Admin only)

View all vending machine items (User + Admin)

Simple and clean UI (React)




🔐 Security

Password hashing (bcrypt)

Access tokens (JWT)

Token verification middleware

Admin-role middleware




🗄 Database

MySQL database with:

users table

products table




🧰 Tech Stack

Frontend

React

Axios

React Router

Tailwind


Backend

Node.js

Express.js

JWT Authentication

bcrypt

CORS

Database

MySQL2

MySQL Workbench



📁 Folder Structure
backend/
   ├── server.js
   ├── src/
       ├── config/db.js
       ├── routes/
       ├── Controller/
       ├── middlewares/
frontend/
   ├── src/
       ├── pages/
       ├── components/
       ├── api/axios.js

       

🔌 API Endpoints
Auth Routes
Method	Route	Description
POST	/auth/register	Register new user
POST	/auth/login	Login and get token
User Routes
Method	Route	Description
GET	/user/product	View all products
Admin Routes
Method	Route	Middleware	Description
POST	/admin/product	verifyToken + isAdmin	Add new product


⚙️ Setup Instructions
1️⃣ Clone the repo
git clone https://github.com/your-username/vending-machine.git
cd vending-machine

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_PASSWORD
DB_NAME=vending_machine
JWT_SECRET=YOUR_RANDOM_SECRET_KEY


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🖼 Screenshots (Add yours here)
(Add images like product page, register page, admin panel)

📌 Future Improvements

Payment gateway integration

Product inventory tracking

Admin dashboard UI

User purchase history

Images for each product

Analytics for sales
