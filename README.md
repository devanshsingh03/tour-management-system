

# 🌍🚀 **TOUR MANAGEMENT SYSTEM — MERN STACK**

<p align="center">
  <img src="https://github.com/placeholder/banner.gif" alt="Tour Management System Banner" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-lightgrey?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-success?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-red?style=for-the-badge&logo=jsonwebtokens" />
</p>

---

# 🎯 **Project Summary (For Recruiters)**

The **Tour Management System** is a professional MERN stack application that demonstrates:
✔ Full-stack system architecture
✔ Secure JWT authentication
✔ Dynamic CRUD operations
✔ Clean UI + optimized UX
✔ Reusable React components
✔ Production-style backend architecture

Perfect for showcasing your **full-stack development skills**.

---

# ✨ **Features**

## 👤 User Features

* 🌍 Explore tours
* 🔍 Search & filter trips
* 📝 Register / Login
* 🎫 Book tours
* ❌ Cancel bookings
* 📘 View booking history

## 🛠️ Admin Features

* ➕ Add tours
* 📝 Edit tours
* 🗑️ Delete tours
* 📊 Manage bookings
* 👥 Manage users

---

# ⚙️ **Tech Stack**

| Layer              | Technologies                  |
| ------------------ | ----------------------------- |
| **Frontend**       | React.js, Tailwind/CSS, Axios |
| **Backend**        | Node.js, Express.js           |
| **Database**       | MongoDB + Mongoose            |
| **Authentication** | JWT, Bcrypt                   |
| **API Pattern**    | REST Architecture             |

---

# 🧭 **System Architecture Diagram**

```
 ┌──────────────────┐        ┌────────────────────┐        ┌────────────────────┐
 │  React Frontend   │ -----> │  Express API Layer  │ -----> │   MongoDB Database  │
 └──────────────────┘        └────────────────────┘        └────────────────────┘
           │                           │                           │
           └────────────── JWT Authentication Layer ───────────────┘
```

---

# 📁 **Folder Structure**

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
    │   ├── utils/
    │   └── App.js
```

---

# 🗄️ **Database Models**

### 👤 User Model

```
name
email
password
role (user/admin)
```

### 🧳 Tour Model

```
title
description
price
duration
location
image
```

### 🎟 Booking Model

```
userId
tourId
date
status (booked/cancelled)
```

---

# 🏗️ **Installation & Setup**

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
cd tour-management-system
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env`:

```
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret
```

Run server:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

# 🌐 **API Endpoints**

### 🔐 Authentication

```
POST   /api/auth/register
POST   /api/auth/login
```

### 🧳 Tours

```
GET    /api/tours
GET    /api/tours/:id
POST   /api/tours          (Admin)
PUT    /api/tours/:id      (Admin)
DELETE /api/tours/:id      (Admin)
```

### 🎟 Bookings

```
POST   /api/booking
GET    /api/booking/user/:id
PUT    /api/booking/cancel/:id
```

---

# 🤝 **Contributors**

Thanks to the amazing team behind this project:

| Name              | Role                 |
| ----------------- | -------------------- |
| **Devansh Singh** | Full Stack Developer |
| **Daksh**         | Contributor          |
| **Sanskar**       | Contributor          |
| **Sayma**         | Contributor          |
| **Saksham**       | Contributor          |

---

# 👨‍💻 **Author**

### **Devansh Singh**

💻 Full Stack MERN Developer
🚀 Passionate about scalable applications
📧 Email: 1412devansh@gmail.com


---

