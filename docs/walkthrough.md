# 🏥 CureOS - Hospital Management System Walkthrough

## 1. Project Overview
CureOS is a full-stack, enterprise-grade hospital management system featuring a modern Glassmorphism UI, role-based access control, and real-time dashboards.

**Tech Stack:**
- **Frontend**: Next.js 14, TailwindCSS v4, Framer Motion
- **Backend**: Node.js, Express, MongoDB
- **DevOps**: Docker, GitHub Actions (CI/CD)

## 2. Completed Features
- **Authentication**: JWT-based login/signup with role selection (Admin, Doctor, Patient, etc.).
- **Dashboards**:
  - **Admin**: Real-time stats with animated charts (Recharts).
  - **Doctor**: Appointment timelines.
  - **Patient**: Medical history and prescriptions.
- **UI/UX**: Responsive "Crazy Beautiful" design with dark/light mode support.
- **Security**: Rate limiting, XSS protection, and secure headers.
- **Resilience**: Automatic fallback to In-Memory Database if local MongoDB is missing.

## 3. How to Run Locally

### Option A: Quick Start (No DB Required)
1. Navigate to the project root:
   ```bash
   cd hospital-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Access the app:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

*Note: The system will automatically use an in-memory database if you don't have MongoDB installed.*

### Option B: Docker (Production-Like)
1. Ensure Docker Desktop is running.
2. Run:
   ```bash
   docker-compose up --build
   ```

## 4. How to Deploy (GitHub)

The project is already initialized as a Git repository. To push to GitHub:

1. Create a new repository on GitHub.
2. Run the following commands:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## 5. Deployment Guide (Vercel & Render)

### Frontend (Vercel)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and import your repository.
3. Add Environment Variable:
   - `NEXT_PUBLIC_API_URL`: Your backend URL (e.g., `https://your-backend.onrender.com/api`)
4. Deploy!

### Backend (Render)
1. Create a new Web Service on [Render](https://render.com).
2. Connect your GitHub repo.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Add Environment Variables:
   - `MONGO_URI`: Connection string from MongoDB Atlas.
   - `JWT_SECRET`: A secure secret key.
