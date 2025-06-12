# Full Stack MERN Blog Application

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green.svg)
![Express](https://img.shields.io/badge/Express-v4.21.2-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v5+-green.svg)
![React](https://img.shields.io/badge/React-v18.3.1-61DAFB.svg)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF.svg)
![Firebase](https://img.shields.io/badge/Firebase-v11.1.0-orange.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-38B2AC.svg)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC.svg)
![Deployment: Vercel](https://img.shields.io/badge/Deployment-Vercel-black.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<p align="center">
  <img src="./client/src/assets/images/logo-dark.png" alt="Blog Logo" width="300"/>
</p>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Admin Panel](#admin-panel)
- [Firebase Integration](#firebase-integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🔭 Overview

A full-featured blogging platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to create, read, update, and delete blog posts, manage categories, comment on posts, and more. The platform features user authentication via Firebase, an admin dashboard for content management, and responsive design for optimal viewing across devices.

## ✨ Features

- **User Authentication**
  - Google Sign-In via Firebase
  - JWT token-based authentication
  - Protected routes
  - Role-based access control (Admin/User)

- **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich text editing with CKEditor
  - Category organization
  - Blog search functionality
  - Related blog recommendations

- **Comments & Interactions**
  - Comment on blog posts
  - Like/unlike blog posts
  - Track comment counts

- **Admin Dashboard**
  - User management
  - Category management
  - Content moderation
  - Analytics overview

- **Responsive UI**
  - Mobile-friendly interface
  - Modern and clean design
  - Tailwind CSS for styling

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary** - Image storage

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **Firebase** - Authentication
- **CKEditor** - Rich text editing
- **Moment.js** - Time formatting

## 📁 Project Structure

```
Blog/
├── api/                 # Backend
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   └── routes/          # API routes
├── client/              # Frontend
│   ├── public/          # Public assets
│   └── src/
│       ├── assets/      # Images, icons, etc.
│       ├── components/  # Reusable components
│       ├── helpers/     # Utility functions
│       ├── hooks/       # Custom React hooks
│       ├── Layout/      # Layout components
│       ├── pages/       # Page components
│       └── redux/       # Redux store
```

## ⚙️ Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Firebase account

### Backend Setup
```bash
cd api
npm install
cp .env.example .env  # Copy and configure environment variables
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
cp .env.example .env  # Copy and configure environment variables
npm run dev
```

## 🔐 Environment Variables

### Backend (.env)
```
PORT=3000
MONGODB_CONN=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_FIREBASE_API=your_firebase_api_key
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/google-login` - Login with Google
- `GET /api/auth/logout` - Logout user

### Blog
- `GET /api/blog/blogs` - Get all blogs
- `GET /api/blog/get-blog/:slug` - Get blog by slug
- `GET /api/blog/get-blog-by-category/:category` - Get blogs by category
- `GET /api/blog/search` - Search blogs
- `POST /api/blog/add` - Add new blog (auth required)
- `PUT /api/blog/update/:blogid` - Update blog (auth required)
- `DELETE /api/blog/delete/:blogid` - Delete blog (auth required)

### Category
- `GET /api/category/all-category` - Get all categories
- `POST /api/category/add` - Add new category (admin only)
- `PUT /api/category/update/:categoryid` - Update category (admin only)
- `DELETE /api/category/delete/:categoryid` - Delete category (admin only)

### User
- `GET /api/user/profile` - Get user profile (auth required)
- `PUT /api/user/update` - Update user profile (auth required)
- `GET /api/user/all` - Get all users (admin only)

## 🔒 Authentication

The application uses a combination of Firebase Authentication for Google Sign-in and JWT tokens for session management:

1. **Google Authentication Flow**:
   - User clicks on Google Sign-in button
   - Firebase handles the OAuth flow
   - Upon successful authentication, user data is sent to the backend
   - Backend creates or updates user in the database
   - JWT token is created and set as an HTTP-only cookie

2. **JWT Authentication**:
   - JWT tokens are stored in HTTP-only cookies
   - The `authenticate` middleware verifies tokens for protected routes
   - The `onlyadmin` middleware checks for admin privileges

## 👑 Admin Panel

The admin panel provides a comprehensive interface for site management:

- **User Management**: View, edit and manage user accounts
- **Category Management**: Create, update, and delete blog categories
- **Content Management**: Monitor and moderate blog posts and comments

To access the admin panel:
1. Login with an admin account
2. Admin-specific navigation items will appear in the sidebar

## 🔥 Firebase Integration

Firebase is used for authentication services:

1. **Setup**:
   - Create a Firebase project
   - Enable Google Authentication
   - Add your web app to the Firebase project
   - Copy the Firebase configuration to your environment variables

2. **Configuration**:
   ```javascript
   const firebaseConfig = {
     apiKey: process.env.VITE_FIREBASE_API,
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-messaging-id",
     appId: "your-app-id"
   };
   ```

## 🚀 Deployment

### Backend Deployment (Vercel)
1. Configure `vercel.json` for serverless functions
2. Set environment variables in Vercel dashboard
3. Connect GitHub repository to Vercel
4. Deploy

### Frontend Deployment (Vercel)
1. Configure build settings in Vercel dashboard
2. Set environment variables
3. Connect GitHub repository to Vercel
4. Deploy

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Designed & Developed By: <a href='https://github.com/Saksham-Goel1107'>Saksham Goel</a>
</p>
