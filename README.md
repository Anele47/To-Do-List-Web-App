# MyTasks – Productivity Task Manager

MyTasks is a modern web-based task management application that helps users organize their daily tasks, track progress, and improve productivity. It includes features like task priorities, analytics, streak tracking, calendar planning, and a clean dark-themed landing page.

---
Features

-  User login system (localStorage-based authentication)
-  Separate accounts for each user
-  Each user can ONLY access their own tasks
- Add, edit, and delete tasks
- Mark tasks as completed or important
-  Search and filter tasks
-  Due date tracking
- Analytics dashboard (weekly & monthly progress)
- Productivity streak tracking
-  Profile page with user stats
-  Dark modern UI
-  Fully responsive design
-  Landing page with demo video

---

# Technologies Used

HTML5
- CSS3 (Flexbox + Animations)
- JavaScript (Vanilla JS)
- LocalStorage (data persistence)
- Chart.js (analytics graphs)
- Font Awesome (icons)

---
 Key Analytics
- Weekly task completion chart
- Monthly productivity chart
- Priority breakdown (important vs normal)
- Streak tracking (consecutive productive days)
- Completion rate calculation

---
How It Works
- User logs in or signs up
- Username/email is stored as currentUser
- Tasks are saved using:
- tasks_currentUser
- Each page loads only that user’s data from localStorage
- Analytics and profile pages calculate stats from stored tasks


