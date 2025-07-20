![Banner](https://github.com/mahmoud-abuyoussef/Todo_List_Web_Application/blob/main/public/banner.webp)

# 📝 Todo List Web App — Real-World Front-End Training Project

> 🧑‍🏫 **Note:** This project is part of a **professional front-end training program**, supervised by a senior developer to simulate a real-world team workflow.

A professional training project for building a responsive and modern **Todo List Web Application**, developed by a team of front-end developers under the supervision of a Senior Front-End Developer.  
This project simulates a real-world development environment—from receiving designs in Figma to deploying the final product.

---

## 📚 Table of Contents

- [Project Goal](#project-goal)
- [Tech Stack](#tech-stack)
- [UI & Design](#ui--design)
- [Core Functionalities](#core-functionalities)
- [API Documentation](#api-documentation)
- [Roadmap](#roadmap)
- [Git Workflow](#git-workflow)
- [How to Contribute](#how-to-contribute)
- [Contributors](#contributors)
- [Deployment](#deployment)
- [License](#license)

## Project Goal

- Practice converting Figma designs into fully functional web pages.
- Learn how to collaborate effectively on a team using Git and GitHub.
- Write clean, maintainable, and scalable code.
- Experience full software development workflow (from development to production).

---

![Status](https://img.shields.io/badge/Status-In_Progress-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## Tech Stack

- ### 🧠 Programming Language

  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)

- ### Frameworks

  - #### CSS

    ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)

  - #### JavaScript

    ![Next.js](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white)

- ### 🧪 Testing (Coming Soon)

> We plan to add unit and integration tests using:

- ![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff)

> Tests will ensure UI and business logic behave as expected.

- ### Tools

  - #### 💻 IDE/Code Editors

    ![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)

  - #### Version Control System

    ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)
    ![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)

  - #### Package Managers

    ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff)

  - #### Design

    ![Figma Free Design](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)

  - #### Collaboration Tools

    ![Google Meet](https://img.shields.io/badge/Google%20Meet-00897B?logo=google-meet&logoColor=white)
    ![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)
    ![GitHub Project](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)

- ### Hosting

  ![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)

---

## UI & Design

### Design License

The UI design used in this project is based on a **free Figma template**, licensed for personal and educational use.  
Figma License: [Free Figma Design Source](https://www.figma.com/design/GN707LPUS0ez58RygBmCFL/To-do-List-Web-App-Design--Community-?node-id=16-34&p=f&t=DTalImRlUljxSITz-0)

---

### Pages

- Register
- Login
- Dashboard
- My Tasks
- Vital Tasks
- Account Information
- Update Account Information
- Change Password
- Task Categories
- Create Categories
- View Task

---

### Popups

- Send Invitation to New Member
- Add New Task
- Edit Task
- Add Task Priority
- Edit Task Priority
- Edit Task Status

---

### Dropdowns

- Calendar
- Notifications

---

### Core Functionalities

- User Registration
- User Login
- User Logout
- Add Account Information
- Update Account Information
- Change Password
- Add / Edit / Delete Task
- Add / Edit / Delete Categories
- Add / Edit / Delete Task Priority
- Add / Edit Task Status
- Search Task

---

## API Documentation

[API Documentation](https://todolistwebapp.up.railway.app)

---

## Roadmap

> This roadmap tracks the key milestones and progress of the Todo List Web App project. Each milestone groups related features and tasks to simulate a real-world agile workflow.

### Milestone: `v0.1 – Authentication & Setup`

- [ ] Setup project
- [ ] Implement Register Page UI
- [ ] Implement Login Page UI
- [ ] Hook up backend authentication
- [ ] User session persistence (localStorage or cookies)

---

### Milestone: `v0.2 – Dashboard & Tasks`

- [ ] Dashboard Layout (Sidebar + Header)
- [ ] My Tasks Page
- [ ] Vital Tasks Filtering
- [ ] Task Card Component
- [ ] View Task Details Popup
- [ ] Search Task Functionality

---

### Milestone: `v0.3 – Task Management Features`

- [ ] Add / Edit / Delete Task
- [ ] Add / Edit Task Status
- [ ] Add / Edit Task Priority
- [ ] Add / Edit / Delete Categories
- [ ] Add Calendar Dropdown
- [ ] Notifications Dropdown

---

### Milestone: `v0.4 – User Account Settings`

- [ ] Account Information Page
- [ ] Update Account Info Page
- [ ] Change Password Page
- [ ] Send Invitation Popup

---

### Milestone: `v1.0 – MVP Release`

- [ ] Final QA & bug fixes
- [ ] Responsive Design Review
- [ ] Code clean-up & linting
- [ ] Deploy to Vercel
- [ ] Write complete documentation

## Project Structure

> 📁 Project structure will be added once the initial codebase scaffolding is finalized.

---

## Common Commands & Workflow

> Git and GitHub are used for source control and team collaboration.

---

### Git Workflow

```bash
# 1. Fork the repository

# 2. Clone the repository
git clone git@github.com:mahmoud-abuyoussef/Todo_List_Web_Application.git

# 3. Navigate to the project folder
cd Todo_List_Web_Application

# 4. Install dependencies
pnpm install

# 5. Run development server
pnpm run dev

# 6. Create a new branch for your feature
git checkout -b feature/your-feature-name

# 7. After development, stage and commit your changes

# ✅ Git Commit Convention

We follow the **Conventional Commits** standard. Each commit message should follow this format:

🔤 Allowed `type(scop):` message:

# feat(scop): a new feature
# fix(scop): a bug fix
# docs(scop): documentation only changes
# style(scop): code formatting, white-space
# refactor(scop): code refactor without behavior change
# perf(scop): performance improvement
# test(scop): adding or updating tests
# chore(scop): changes to the build system, CI, or tools

# 📌 Examples:

# Add a new feature: login page UI
git commit -m "feat(auth): add login page UI"

# Fix a bug: registration form validation
git commit -m "fix(auth): fix register form validation"

# Add or update documentation
git commit -m "docs(readme): update contribution guidelines"

# Code formatting (no logic change)
git commit -m "style(button): format button component with Prettier"

# Refactor code without changing behavior
git commit -m "refactor(task): simplify task filtering logic"

# Improve performance of task rendering
git commit -m "perf(task): optimize task rendering performance"

# Add or update tests
git commit -m "test(task): add unit tests for task reducer"

# Tooling/config changes or housekeeping tasks
git commit -m "chore(lint): update ESLint config rules"

# Update dependencies
git commit -m "chore(deps): upgrade react to v18.2.0"

# 8. Push your branch
git push origin feature/your-feature-name

# 9. Create a Pull Request (PR) to the main branch on GitHub

# 10. Build for production
pnpm run build
```

---

## How to Contribute

- Fork the repository.
- Create a feature branch.
- Commit your changes with clear messages.
- Push and submit a Pull Request.
- Wait for review and feedback.

---

## Contributors

<img src="https://avatars.githubusercontent.com/u/170262504?v=4" style="border-radius: 50%; width: 40px;"/>

**Ahmed Samy**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmed-samy-454b72365/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/AhmedSamyEid)

---

## Project Manager

### Mahmoud Abuyoussef

**Role:** Senior Front-End Developer / Project Manager

[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:mahmoudabuyoussef5@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/mahmoud-abuyoussef)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mahmoudabuyoussef)
[![Linktree](https://img.shields.io/badge/Linktree-39E09B?style=flat&logo=linktree&logoColor=white)](https://linktr.ee/mahmoudabuyoussef)

---

## Deployment

- [Todo List Web App](https://todolistwebapplication.vercel.app)

---

## License

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/mahmoud-abuyoussef/To-do_List/blob/main/LICENSE)
