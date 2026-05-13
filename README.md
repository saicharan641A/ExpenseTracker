# 💸 Expense Tracker App (React Native)

A modern and responsive **Expense Tracker mobile app** built using **React Native**.

This application allows users to:

* ➕ Add expenses
* ✏️ Edit expenses
* 🗑️ Delete expenses
* 🔐 Authenticate users using Firebase Authentication
* ☁️ Sync data with Firebase Realtime Database
* 💾 Cache data locally using AsyncStorage
* 📊 View expenses sorted by latest date
* 👤 Maintain user-specific expense data

The app follows a scalable architecture using:

* Context API
* Axios
* Firebase
* AsyncStorage

---

# 🚀 Features

## Expense Management

* ✅ Add new expenses
* ✅ Edit existing expenses
* ✅ Delete expenses
* ✅ Latest expenses sorting
* ✅ Expense summary support

---

## Authentication

* ✅ User Signup
* ✅ User Login
* ✅ Protected authenticated routes
* ✅ User-specific database storage
* ✅ Persistent authentication flow

---

## Cloud & Offline Support

* ✅ Firebase Realtime Database integration
* ✅ Offline caching using AsyncStorage
* ✅ Automatic local backup
* ✅ Firebase fallback recovery
* ✅ Loading indicator while fetching data

---

## Architecture

* ✅ Context API global state management
* ✅ Clean reusable component structure
* ✅ Axios-based API layer
* ✅ Async/Await asynchronous handling
* ✅ Scalable folder structure

---

# 🧠 Tech Stack

| Technology                 | Purpose                 |
| -------------------------- | ----------------------- |
| React Native               | Mobile app framework    |
| Context API                | Global state management |
| Axios                      | HTTP requests           |
| Firebase Authentication    | User authentication     |
| Firebase Realtime Database | Cloud backend           |
| AsyncStorage               | Offline local storage   |
| date-fns                   | Date formatting         |
| React Navigation           | Navigation system       |

---

# 📂 Project Structure

```bash
.
├── assets/
│   └── colors/
│
├── components/
│   ├── ExpenseCard.js
│   ├── ExpenseSummary.js
│   └── PressableIcon.js
│
├── screens/
│   ├── authorized/
│   │   ├── HomeScreen.js
│   │   └── ExpenseFormScreen.js
│   │
│   └── unauthorized/
│       ├── LoginScreen.js
│       └── SignupScreen.js
│
├── services/
│   ├── auth.js
│   └── http.js
│
├── store/
│   ├── authContext.js
│   └── expenseContext.js
│
└── App.js
```

---

# ⚙️ Installation & Setup

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

# 2️⃣ Install Dependencies

```bash
npm install
```

---

# 🔥 Firebase Setup (IMPORTANT)

This project uses:

* Firebase Authentication
* Firebase Realtime Database

You must create your own Firebase project before running the app.

---

# 3️⃣ Create Firebase Project

Open:

[Firebase Console](https://console.firebase.google.com?utm_source=chatgpt.com)

---

# 4️⃣ Enable Authentication

Inside Firebase Console:

```text
Build
   ↓
Authentication
   ↓
Get Started
```

Enable:

* Email/Password Authentication

---

# 5️⃣ Create Realtime Database

Inside Firebase Console:

```text
Build
   ↓
Realtime Database
   ↓
Create Database
```

Choose:

```text
Start in test mode
```

---

# 6️⃣ Copy Firebase Configuration

---

## Realtime Database URL

Example:

```text
https://your-project-id-default-rtdb.firebaseio.com
```

---

## Firebase Web API Key

Open:

```text
Project Settings
   ↓
General
   ↓
Web API Key
```

---

# 7️⃣ Configure Axios Base URL

Open:

```text
services/http.js
```

Replace:

```javascript
const BASE_URL = "YOUR_FIREBASE_URL";
```

with:

```javascript
const BASE_URL =
  "https://your-project-id-default-rtdb.firebaseio.com";
```

---

# ⚠️ IMPORTANT

Do NOT add:

```text
/expenses.json
```

inside the base URL.

---

# ✅ Correct

```text
https://your-project-id-default-rtdb.firebaseio.com
```

---

# ❌ Wrong

```text
https://your-project-id-default-rtdb.firebaseio.com/expenses.json
```

---

# 8️⃣ Configure Firebase Authentication API Key

Open:

```text
services/auth.js
```

Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with your Firebase Web API Key.

---

# 🔐 Firebase Database Rules

Inside:

```text
Realtime Database
   ↓
Rules
```

Use:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

---

# ⚠️ Development Note

These rules are suitable only for development/testing.

For production, secure rules should validate authenticated users properly.

---

# 👤 User-Specific Database Structure

Each user's expenses are stored separately:

```json
{
  "users": {
    "uid_123": {
      "expenses": {
        "-abc": {
          "title": "Coffee",
          "amount": 150
        }
      }
    }
  }
}
```

This ensures:

* ✅ Data isolation
* ✅ Secure architecture
* ✅ Multi-user scalability

---

# ▶️ Run the App

---

# Android

```bash
npx react-native run-android
```

---

# iOS

```bash
npx pod-install
npx react-native run-ios
```

---

# ☁️ Data Flow Architecture

```text
React Native UI
       ↓
Context API
       ↓
Axios HTTP Requests
       ↓
Firebase Authentication
       ↓
Firebase Realtime Database
       ↓
AsyncStorage Offline Cache
```

---

# 💾 Offline Support

The app automatically:

* Fetches expenses from Firebase
* Stores them locally using AsyncStorage
* Loads cached data if internet is unavailable

This provides a simple offline-first experience.

---

# 📅 Date Format

Expenses use the following format:

```text
DD-MM-YYYY
```

Example:

```text
12-05-2026
```

---

# 🧩 Architecture Highlights

* Centralized state management using Context API
* Reusable UI components
* User-specific cloud storage
* Automatic local caching
* Firebase synchronization
* Clean separation of concerns
* Async/Await API handling
* Scalable authenticated architecture

---

# 🔄 Future Improvements

* 📊 Expense analytics & charts
* 📅 Monthly/weekly filtering
* 🏷️ Expense categories
* 🌙 Dark/Light mode
* ☁️ Real-time syncing
* 📈 Budget tracking
* 🔔 Notifications & reminders
* 🔐 Secure token persistence
* 📤 Expense export functionality

---

# 🤝 Contributing

Contributions are welcome.

Feel free to:

* Fork the repository
* Create a new branch
* Submit a pull request

---

# 🙌 Acknowledgements

* [React Native](https://reactnative.dev?utm_source=chatgpt.com)
* [Firebase](https://firebase.google.com?utm_source=chatgpt.com)
* [Axios](https://axios-http.com?utm_source=chatgpt.com)
* [AsyncStorage](https://react-native-async-storage.github.io/async-storage?utm_source=chatgpt.com)
* [date-fns](https://date-fns.org?utm_source=chatgpt.com)

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
