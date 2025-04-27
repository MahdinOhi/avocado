# 🥑 **Avocado Project - Contribution Guidelines**

Welcome to the **Avocado** project! This document will guide you through the best practices and precautions to follow when contributing to the project. By adhering to these guidelines, we can maintain code quality, avoid conflicts, and ensure smooth collaboration.

---

## 🔑 **Precautions Before Contributing**

1. **Read the README**  
   Always make sure you've read the most recent version of the [README](README.md). This will give you an overview of the project, tech stack, setup instructions, and any important notes.

2. **Use the Right Branch**  
   Always work on a feature or bugfix branch. Never push directly to the `main` or `dev` branches. This helps in keeping the main branches stable.

   **Branch Naming Convention:**

   - For features: `feature/your-feature-name`
   - For bugfixes: `bugfix/your-bugfix-name`
   - For hotfixes: `hotfix/your-hotfix-name`

3. **Always Pull the Latest Changes**  
   Before starting any work, make sure your local repository is up to date with the latest changes from the remote repository.

   ```bash
   git pull origin main
   ```

4. **Virtual Environment**  
   Ensure you're working within the virtual environment for the backend (`backend/venv/`) to prevent dependencies from affecting the global Python environment.

   **Setting up the Virtual Environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

5. **Install Dependencies**  
   Before running or testing the project, install any required dependencies in both the frontend and backend.

   **For Backend:**

   ```bash
   pip install -r backend/requirements.txt
   ```

   **For Frontend:**

   ```bash
   cd frontend
   npm install
   ```

6. **Database Migrations**  
   When working with Django, make sure to apply database migrations regularly to keep the database schema in sync with the models.

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. **Run Tests Locally**  
   Always run tests before pushing your changes to ensure nothing is broken. Django includes a test suite that you can run with the following command:

   ```bash
   python manage.py test
   ```

---

## ⚙ **Working Methods**

1. **Commit Messages**  
   Write clear and concise commit messages following this pattern:

   - **Feature**: `Added feature X to Y`
   - **Fix**: `Fixed bug in X`
   - **Update**: `Updated dependencies for X`
   - **Docs**: `Updated documentation for X`

   Example:

   ```bash
   git commit -m "Added Pomodoro timer functionality"
   ```

2. **Push Changes to Your Branch**  
   After committing, push your changes to the remote repository, but **never push to the main branch**.

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request (PR)**  
   After pushing your branch, create a pull request (PR) to merge your changes into the `main` or `dev` branch.

   - Always assign at least one reviewer to your PR.
   - Provide a short description of the changes made in the PR.

4. **Code Review**  
   All code changes must be reviewed by at least one other contributor before being merged. This helps ensure the code quality and keeps the project maintainable.

5. **Resolve Merge Conflicts**  
   If you encounter merge conflicts, resolve them before pushing. Use Git’s merge tools to help in resolving conflicts efficiently.

---

## 🛠 **Development Guidelines**

1. **Backend (Django)**

   - Organize backend apps logically (e.g., separate apps for `notes`, `pdf_reader`, etc.).
   - Write clean, modular, and reusable code.
   - Use Django’s built-in features for authentication, routing, and ORM to ensure consistency and avoid reinventing the wheel.

2. **Frontend (React)**

   - Use functional components with hooks for the React app.
   - Keep components small and focused (e.g., one component per feature).
   - Use state management (such as React’s `useState`, `useReducer`, or context API) for managing application state.

3. **Code Formatting**

   - Follow consistent code formatting. Use tools like `Prettier` for frontend and `Black` for Python code to maintain uniformity.
   - **Frontend**: Use `eslint` and `prettier` to automatically format your code.

4. **CSS/Styling**

   - For frontend styling, we are using **Tailwind CSS**. Stick to utility-first classes wherever possible.
   - Avoid writing custom CSS unless absolutely necessary.

5. **Testing**

   - **Backend**: Use Django’s test framework to write unit and integration tests.
   - **Frontend**: Use testing libraries like Jest and React Testing Library for testing React components.

6. **Performance**
   - Focus on optimizing performance for both frontend and backend. Avoid large bundle sizes in React by lazy loading and code splitting.
   - For the backend, ensure that the database queries are optimized, and avoid unnecessary database hits.

---

## 🏁 **Deployment**

1. **Development Server**  
   For local development, use Django’s built-in development server and React’s development server to run the backend and frontend separately.

   - **Backend**: `python manage.py runserver`
   - **Frontend**: `npm run dev`

2. **Production Deployment**  
   When deploying the app to production (e.g., Heroku or Google Cloud), ensure the following:

   - Use PostgreSQL in production.
   - Set up environment variables for sensitive data (e.g., Django’s `SECRET_KEY`, database credentials).
   - Enable CORS for the frontend to communicate with the backend using the `django-cors-headers` library.

3. **Logging**  
   Ensure that logs are clear and informative. In production, use logging frameworks to capture detailed logs.

---

## 👥 **Communication & Collaboration**

- **Slack/Teams:** Use Slack (or any other communication tool) for quick discussions and updates.
- **Issues:** Use GitHub Issues to track bugs, feature requests, or anything that needs attention.
- **Planning:** Use project management tools (e.g., Trello, Jira) to keep track of tasks, bugs, and milestones.

---

## ❓ **Questions or Issues?**

If you encounter any issues or have questions about the project, don’t hesitate to reach out. We are here to help each other.

- 📧 [mahdinislamohi@gmail.com](mailto:mahdinislamohi@gmail.com)
- 📧 [mehedi90a@gmail.com](mailto:mehedi90a@gmail.com)
- 📧 [ashrafhossainsohan@gmail.com](mailto:ashrafhossainsohan@gmail.com)
- 📧 [turag17@gmail.com](mailto:turag17@gmail.com)
- 📧 [fidaahamed16@gmail.com](mailto:fidaahamed16@gmail.com)

---