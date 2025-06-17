# TickTasks

A **simple and elegant To-Do List application** built with **React and Vite**.  
Stay organized, track your tasks, and get things done efficiently! 🚀✨

---

## 🔹Features

✅ **Add, edit, and delete tasks**   
✅ **Mark tasks as complete**   
✅ **Clean and responsive UI**   
✅ **Fast and lightweight with Vite + React**   
✅ **User Authentication with Firebase Auth**   
✅ **Real-time Database with Cloud Firestore**   

---

## 🔹Tech Stack

- **React**  
- **Vite**  
- **Javascript (ES6+)**  
- **CSS**  
- **Firebase (Auth + Firestore)**  

---

## 🔹Installation

To run this application locally:

1. **Clone this repository:**

```bash
git clone https://github.com/Aayushsoni-1/TickTasks.git
```

2. **Navigate into the directory:**

```bash
cd TickTasks
```

3. **Installing dependencies:**

```bash
npm install
```

---

## 🔹Running in Development

Start the Vite development server:

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173).

---

## 🔹Firebase Integration (Auth + Firestore)

This application uses **Firebase Authentication** for user sign-up and login, and **Cloud Firestore** for real-time data storage.



✅ **Firebase Auth** — for securing routes and managing users.  
✅ **Cloud Firestore** — for adding, retrieving, and updating tasks in real time.

---

## 🔹Environment Variables

Created a `.env.local` file in root directory with my Firebase configuration:

```bash
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

Alternate change the Firebase.js accordingly!
1️⃣ Create a Firebase Project

If you haven't already, create a new project in [Firebase Console](https://console.firebase.google.com/).

---

### 2️⃣ Retrieve Your Firebase Config

- Select **Project settings** (gear icon).
- Scroll down to **Your apps**.
- Select or add a new **Web App**.
- You'll see your **Firebase config object**:

```javascript
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_id.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project_id.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
};


---
---

## 🔹Contributing

Contributions are welcome!  
If you want to improve or add a new feature:

1. **Fork this repository.**  
2. **Create a new branch.**  
```bash
git checkout -b feature-name
```  
3. **Make your improvements.**  
4. **Create a Pull Request.**  

---

## 🔹License

This project is licensed under [MIT](LICENSE).

---

## 🔹Author

👤 [Aayush Parekh](https://github.com/Aayushsoni-1)

---

✨ **Thank you for checking out TickTasks!😉☺️**  
If you find it helpful, please give it a ⭐ (star) — appreciate your support!  
✨
