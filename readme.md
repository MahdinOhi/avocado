# 🥑 Avocado

A split-screen productivity based work station web app built with **Django** (backend) and **React** (frontend). One side lets you read PDFs, web pages, YouTube videos, or use a Pomodoro timer and calendar. The other side supports note-taking, jotting ideas, and managing tasks with rich-text editing and highlighting.

---

## 🚀 Features

- 📄 PDF Reader
- 🌐 Web Page Viewer
- 🎥 YouTube Integration
- ⏱ Pomodoro Timer
- 📅 Calendar
- 📝 Notes, Jots & Task Manager
- ✨ Rich-text Editing & Highlighting
- ⚡ Fast, Replit/Google Docs-like performance

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (dev) / PostgreSQL (prod)
- **Auth:** Django AllAuth / JWT
- **Deployment:** Heroku / Google Cloud Platform

---

## 📦 Setup

### Backend

```bash
git clone https://github.com/mahdinohi/avocado.git
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📁 Project Structure

```
avocado/
├── backend/       # Django project
│   ├── avocado/   # settings
│   ├── notes/
│   ├── pdf_reader/
│   └── web_reader/
└── frontend/      # React app
```

---

## 👥 Contributors

- 📧 [mahdinislamohi@gmail.com](mailto:mahdinislamohi@gmail.com)
- 📧 [mehedi90a@gmail.com](mailto:mehedi90a@gmail.com)
- 📧 [ashrafhossainsohan@gmail.com](mailto:ashrafhossainsohan@gmail.com)
- 📧 [turag17@gmail.com](mailto:turag17@gmail.com)
- 📧 [fidaahamed16@gmail.com](mailto:fidaahamed16@gmail.com)

---
