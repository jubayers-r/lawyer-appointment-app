# ⚖️ Lawyer Appointment Booking App

An interactive React-based web app for browsing lawyer profiles, checking availability, and booking appointments. Designed with performance, accessibility, and user experience in mind.

## 🚀 Live Demo

[🔗 View Deployed App](https://gorgeous-crepe-040b98.netlify.app/)

---

## 📸 Preview

| Desktop | Mobile |
|--------|--------|
| ![Desktop Preview](https://i.ibb.co.com/Y7Z5HJkV/image.png) | ![Mobile Preview](https://i.ibb.co.com/G4bBvL8q/fb24ab72-b553-4b58-91e6-a28ca7de868e.jpg) |

> 📁 More screenshots available in [`/screenshots`](./screenshots)

---

## 🧰 Tech Stack

- **React.js**
- **React Router**
- **Tailwind CSS**
- **Recharts** (Charts)
- **LocalStorage** (Persistence)
- **React CountUp** (Animated counters)

---

## 📦 Installation

To run this project locally:

```bash
git clone https://github.com/yourusername/lawyer-appointment-app.git
cd lawyer-appointment-app
npm install
npm run dev
```
## 🔐 Environment Variables

This project does not use external APIs. All data is mocked or stored via `localStorage`.

If backend or external services are added in the future, `.env` variables will go here.

---

## 🌟 Features

### 🔗 Global Navigation

- Responsive Navbar and Footer
- Dynamic routing with 404 handling

### 🏠 Home Page

- Hero banner, dynamic lawyer grid (6–12), animated stats

### 👨‍⚖️ Lawyer Profiles

- Name, experience, fees, availability badges
- “Book Now” button with availability logic

### 📅 Booking System

- Prevents duplicates
- Stored in `localStorage`
- Success/error toasts
- Cancel functionality updates charts in real time

### 📚 Blogs Page

- Educational content on React topics (`useState`, `useEffect`, etc.)

### 📊 Charts

- Lawyer fee trends via Recharts
- Live updates on booking changes

---

## 📂 Folder Structure (Simplified)

```bash
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Blogs/
│   ├── Error/
├── utils/
│   ├── localStorageUtils.js
│   └── Loading.jsx
├── App.jsx
└── main.jsx
```

## 🧠 Educational Blogs Included

- What is `useState` and how does it work?
- Why use `useEffect` in React?
- Custom hooks: what and why?
- Controlled vs uncontrolled components
- What is `useFormStatus()`?

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## 🧑‍💼 Author

**Jubayer Shikder**
[🐦 Twitter (X)](https://x.com/jubaeyrs_r) • [📧 Email](mailto:juabyerxshikder@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/jubayers-r)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).