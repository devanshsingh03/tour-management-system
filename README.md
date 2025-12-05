

# 🌙✨ **TOUR MANAGEMENT SYSTEM — MERN STACK**

A modern and fully responsive **Tour Management System** built using the **MERN Stack**.
Users can browse, explore, and book tours, while admins can manage packages and bookings.
Designed with clean UI, fast APIs, and secure authentication.

---

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-20232A?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Backend-Node.js-43853D?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-4EA94B?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-blueviolet?style=for-the-badge" />
</p>

---

## 🖤 **Overview**

The **Tour Management System** allows customers to discover tours, read detailed itineraries, and book travel packages.
Admins can add/edit/delete tours and manage bookings.
The project follows a modern architecture with reusable components, organized backend APIs, and token-based authentication.

---

## ✨ **Features**

### 👤 User Features

* 🌐 Browse all tour packages
* 🔍 Search + filter tours
* 📄 View detailed tour descriptions
* 🔐 User registration & login
* 🎫 Book tours effortlessly
* ❌ Cancel bookings
* 📜 View booking history

### 🛠️ Admin Features

* ➕ Add new tour packages
* 📝 Edit existing tours
* ❌ Delete tours
* 📊 Manage bookings & users

---

## ⚙️ **Tech Stack**

| Layer              | Technology                    |
| ------------------ | ----------------------------- |
| **Frontend**       | React.js, CSS/Tailwind, Axios |
| **Backend**        | Node.js, Express.js           |
| **Database**       | MongoDB, Mongoose             |
| **Authentication** | JWT, Bcrypt                   |
| **API Pattern**    | RESTful APIs                  |

---

## 📁 **Project Structure**

```
Tour-Management-System/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── hooks/
    │   ├── utils/
    │   └── App.js
```

---

## 🗄️ **Database Models**

### 👤 User

```
name
email
password (hashed)
role (user/admin)
```

### 🧳 Tour

```
title
description
price
duration
location
image
```

### 🎟 Booking

```
userId
tourId
date
status (booked/cancelled)
```

---

## 🚀 **Installation Guide**

### 1️⃣ Clone the repository

```
git clone <your-repository-link>
cd tour-management-system
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm start
```

---

## 🌐 **API Endpoints**

### 🔐 Auth

```
POST   /api/auth/register
POST   /api/auth/login
```

### 🧳 Tours

```
GET    /api/tours
GET    /api/tours/:id
POST   /api/tours         (Admin)
PUT    /api/tours/:id     (Admin)
DELETE /api/tours/:id     (Admin)
```

### 🎟 Bookings

```
POST   /api/booking
GET    /api/booking/user/:id
PUT    /api/booking/cancel/:id
```

---

## 👨‍💻 **Author**

### **Devansh Singh**

Passionate Full Stack Developer
Specialized in MERN stack & modern web applications

---

=
