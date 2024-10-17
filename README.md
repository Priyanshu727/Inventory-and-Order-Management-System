# Inventory & Order Management System

This is a full-stack application for customers and admins to manage inventory and track orders. The system includes user authentication, 
product catalog management, and order tracking functionalities, tailored for both customers and admins. It is built with a React frontend and Node.js backend,
integrated with MongoDB for data storage.

## Features

### Frontend (React + Tailwind CSS)
- **Login/Sign-Up Pages**: Role-based login for customers and admins, with validation.
- **Product Catalog**: 
  - Display products with details (name, price, available stock).
  - Customers can add items to a shopping cart and review the cart before placing an order.
- **Order History**: 
  - Customers can view past orders with details like order date, status, and total amount.
- **Admin Panel**:
  - Manage products (add, update, delete) and view low-stock products.
  - Track all customer orders and update order statuses.
- **Responsive Design**: Optimized for both desktop and mobile devices.

### Backend (Node.js + Express + MongoDB)
- **User Authentication**: 
  - JWT-based authentication for customers and admins.
  - Role-based access control (admin/customer).
- **Inventory Management**:
  - CRUD operations for products.
  - Manage stock levels and receive alerts for low-stock products.
- **Order Management**:
  - Customers can place orders and track order status (Pending, Shipped, Delivered).
  - Admins can update order statuses and view all customer orders.

---

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux / Context API**: State management (choose one based on your implementation).
- **Axios**: For making HTTP requests to the backend API.

### Backend:
- **Node.js**: JavaScript runtime for the server.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user, product, and order data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Tokens)**: For user authentication and role-based access control.

---

## Installation and Setup

### Prerequisites:
- Node.js installed on your system
- MongoDB installed locally or use a cloud MongoDB service (e.g., MongoDB Atlas)

### Frontend Setup:
1. Clone the repository:
   
   git clone https://github.com/Priyanshu727/Inventory-and-Order-Management-System
.git

## API Endpoints

## Authentication:

POST /api/auth/register: Register a new user (customer/admin).
POST /api/auth/login: Login and receive a JWT.

## Product Management (Admin):

GET /api/products: Get all products.
POST /api/products: Add a new product.
PUT /api/products/:id: Update a product.
DELETE /api/products/:id: Delete a product.

## Order Management:
POST /api/orders: Place a new order (customer).
GET /api/orders: View all orders (admin).
GET /api/orders/customer: View customer’s past orders.
PUT /api/orders/:id/status: Update order status (admin).

 ## Usage-

## Customer:
Sign up as a customer and log in.
Browse the Product Catalog, add items to your shopping cart, and place an order.
View your Order History to track your previous purchases and their statuses.

## Admin:
Sign up as an admin and log in.
Access the Admin Panel to manage inventory:
Add, update, or delete products.
View products that need restocking.
View and manage all customer orders, updating order statuses as needed.

