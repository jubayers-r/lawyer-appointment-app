# ⚖️ Lawyer Appointment Booking App

An interactive React-based web application for browsing lawyer profiles, checking availability, and booking appointments — all with smooth UI, routing, and data persistence. Built with performance, accessibility, and user experience in mind.

## 🚀 Live Demo
[🔗 View Deployed App](https://your-live-site-link.com)

## 📸 Preview
![App Preview](link-to-screenshot-or-gif)

---

## 🧰 Tech Stack

- **React.js**
- **React Router**
- **Recharts** (for data visualization)
- **LocalStorage** (for persistence)
- **React CountUp** (for animated stats)
- **Vanilla CSS / Tailwind / Styled Components** *(based on your styling choice)*

---

## 📂 Features

### 🧭 Global Navigation
- Consistent **Navbar** and **Footer** across all pages
- Responsive design with social media links
- Dynamic routing and error handling

### 🏠 Homepage
- Eye-catching banner with background image
- Lawyer cards grid (6 initially, expandable to 12)
- Success stats with counting animation

### 👨‍⚖️ Lawyer Profile Page
- Detailed lawyer profile with:
  - Photo, Name, Experience, License, Fees
  - Availability badges
- Appointment card with **"Book Now"** logic

### 🧾 Booking Logic
- Prevent duplicate bookings
- Bookings are stored in **localStorage**
- User feedback with success/error toasts

### 📅 Bookings Page
- View all scheduled appointments
- Cancel functionality with real-time chart update
- Conditional chart rendering (with Recharts)

### 📚 Blogs Page
- Educational blog posts on key React concepts:
  - `useState`, `useEffect`, custom hooks, controlled vs uncontrolled components, `useFormStatus()`

### ❌ Custom 404 Error Page
- Friendly message with navigation option
- Navbar shown, footer hidden for clarity

---

## 📊 Charts & Stats
- Dynamic chart shows lawyer fee trends
- Realtime updates when bookings are cancelled
- Homepage stats animated using `react-countup`

---

## ✨ Optional Features Implemented
- **Booking based on availability**
- **Dynamic page titles using React Router**
- **Loading indicators for smoother UX**
- **Invalid route handling with error messaging**

---

## 🧠 Blogs Covered

- What is `useState` and how does it work in React?
- Purpose of `useEffect`
- What are custom hooks and when to use them?
- Controlled vs uncontrolled components
- What is `useFormStatus()` in React?

---

## 🗂️ Folder Structure (Simplified)
src/
│
├── components/
│ └── Navbar, Footer, LawyerCard, Chart, etc.
├── pages/
│ └── Home.jsx, Bookings.jsx, Blog.jsx, Error.jsx, etc.
├── hooks/
│ └── useAvailableLawyers.js
├── utils/
│ └── localStorageUtils.js
└── App.jsx, main.jsx, etc.

---

## 📅 Project Highlights

- ✅ 10+ Git commits
- 📱 Fully responsive
- 🧪 Functional booking system with client-side validation
- 📊 Visual data using charts
- 💾 Persistent data storage
- ⚙️ Real-time UI feedback

---

## 🧑‍💼 Author

**Your Name**
[🌐 Portfolio](https://your-portfolio.com)
[🐦 Twitter](https://twitter.com/yourhandle)
[📧 Email](mailto:your@email.com)
[💼 LinkedIn](https://linkedin.com/in/yourprofile)

---

## 📜 License
This project is licensed under [MIT](LICENSE).

---