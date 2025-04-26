# 🥑 **Avocado**

A split-screen productivity web app built with **Django** (backend) and **React** (frontend). On one side, users can read PDFs, view web pages, watch YouTube videos, and track Pomodoro sessions. On the other side, users can take notes, jot ideas, and manage tasks with rich-text editing and highlighting.

---

## 🚀 **Features**

- 📄 PDF Reader
- 🌐 Web Page Viewer
- 🎥 YouTube Integration
- ⏱ Pomodoro Timer
- 📅 Calendar
- 📝 Notes, Jots & Task Manager
- ✨ Rich-text Editing & Highlighting
- ⚡ Fast, Replit/Google Docs-like performance

---

## 🛠 **Tech Stack**

- **Frontend:** React, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (development) / PostgreSQL (production)
- **Auth:** Django AllAuth / JWT
- **Deployment:** Heroku / Google Cloud Platform

---

## 📦 **Setup**

### **Backend**

```bash
# Clone the repository
git clone https://github.com/mahdinohi/avocado.git

# Navigate to the backend directory
cd backend

# Create a virtual environment and activate it
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install required dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
```

### **Frontend**

```bash
# Navigate to the frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start the React development server
npm run dev
```

---

## 📁 **Project Structure**

```
avocado/
├── backend/             # Django backend project
│   ├── avocado/         # Django settings
│   ├── notes/           # Notes app
│   ├── pdf_reader/      # PDF reader app
│   ├── web_reader/      # Web page viewer app
│   └── manage.py        # Django management script
└── frontend/            # React frontend app
    ├── src/             # Source code
    ├── public/          # Public assets
    └── package.json     # NPM configuration
```

---

## 👥 **Contributors**

- 📧 [mahdinislamohi@gmail.com](mailto:mahdinislamohi@gmail.com)
- 📧 [mehedi90a@gmail.com](mailto:mehedi90a@gmail.com)
- 📧 [ashrafhossainsohan@gmail.com](mailto:ashrafhossainsohan@gmail.com)
- 📧 [turag17@gmail.com](mailto:turag17@gmail.com)
- 📧 [fidaahamed16@gmail.com](mailto:fidaahamed16@gmail.com)

---

Feel free to reach out if you have any questions or suggestions!

---