# 🏥 Hospital Management System (CureOS)

A production-grade, full-stack Hospital Management System built with **Next.js 14**, **Node.js**, **Express**, **MongoDB**, and **Docker**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Github%20Actions-green)

## 🚀 Features

- **Role-Based Access Control (RBAC)**: Admin, Doctor, Nurse, Patient, Receptionist.
- **Glassmorphism UI**: Premium, modern design with TailwindCSS v4 and Framer Motion.
- **Real-time Dashboards**: Live stats, animated charts (Recharts), and notifications.
- **Secure Authentication**: JWT-based auth with secure cookies and rate limiting.
- **Containerized**: Full Docker support for easy deployment.
- **Enterprise Ready**: Structured logging (Winston), Security headers (Helmet), Caching (Redis ready).

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TailwindCSS, Framer Motion, Axios.
- **Backend**: Node.js, Express.js, TypeScript, Mongoose.
- **Database**: MongoDB.
- **DevOps**: Docker, Docker Compose, GitHub Actions.

## 📦 Installation

### Prerequisites

- Node.js v18+
- Docker & Docker Compose
- MongoDB (Local or Atlas)

### Quick Start (Docker)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hospital-management-system.git
   cd hospital-management-system
   ```

2. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`
   - MongoDB: `localhost:27017`

### Manual Setup

#### Backend
1. `cd server`
2. `npm install`
3. Create `.env` file (see `.env.example`)
4. `npm run dev`

#### Frontend
1. `cd client`
2. `npm install`
3. Create `.env.local` file
4. `npm run dev`

## 🔑 Environment Variables

### Server (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/hospital-management
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

### Client (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🛡️ Security Features

- **Rate Limiting**: Limits repeated requests to public APIs.
- **Helmet**: Secures HTTP headers.
- **XSS Clean**: Sanitizes user input.
- **HPP**: Protects against HTTP Parameter Pollution.
- **CORS**: Configured for security.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the MIT License.
