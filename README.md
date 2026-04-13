
# 🚀 DISHAA – AI-Powered Internship Recommendation Platform

DISHAA is a full-stack web application that helps students discover the most relevant internships using AI-based recommendations. It analyzes user skills and preferences to suggest personalized opportunities.

---

## 🌟 Features

### 🔐 Authentication

* User Registration & Login (JWT-based)
* Secure password hashing (bcrypt)
* Protected routes

### 🧠 AI Recommendation System

* ML microservice (FastAPI)
* Skill-based internship matching
* Match score generation

### 💼 Internship System

* Browse internships
* Smart recommendations
* Apply workflow (backend integrated)

### 👤 User Profile

* Profile management
* Skills tracking
* Resume upload
* Profile completion progress

### 🎨 Modern UI/UX

* Glassmorphism design
* Fully responsive layout
* Smooth animations (Framer Motion)
* Clean dashboard experience

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* React Router

### Backend

* Node.js
* Express.js
* SQLite (or any DB)

### ML Service

* FastAPI
* Pandas / ML logic

---

## 📂 Project Structure

```
internship-app/
│
├── frontend/          # React frontend
├── backend/           # Node.js API
├── ml-service/        # FastAPI ML recommender
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/internship-app.git
cd internship-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5002
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm start
```

---

### 3️⃣ ML Service Setup

```bash
cd ml-service
pip install -r requirements.txt
```

Run:

```bash
python -m uvicorn main:app --reload --port 8000
```

---

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Recommendations

* `POST /api/recommend`

### Apply

* `POST /api/apply`

---

## 🧠 How It Works

1. User enters skills
2. Frontend sends request → backend
3. Backend calls ML service
4. ML model returns ranked internships
5. Frontend displays recommendations

---

## 📸 Screenshots

* Home Page
* Dashboard
* Profile Page
* Recommendation Results

*(Add screenshots here)*

---

## 🚀 Future Improvements

* 🤖 Advanced ML model (cosine similarity / NLP)
* 📊 Analytics dashboard
* 📱 Mobile app
* 🌐 Deployment (Vercel + Render)
* 🔔 Notifications system

---

## 👨‍💻 Author

Rohit Kumar
Full Stack Developer | AI Enthusiast

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
>>>>>>> 3665cad (First commit)
