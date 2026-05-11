# 💸 Expense Tracker App (React Native)

A modern and responsive **Expense Tracker mobile app** built using **React Native**.

This application allows users to:

* ➕ Add expenses
* ✏️ Edit expenses
* 🗑️ Delete expenses
* ☁️ Sync data with Firebase Realtime Database
* 💾 Cache data locally using AsyncStorage
* 📊 View expenses sorted by latest date

The app follows a scalable architecture using **Context API**, **Axios**, and **Firebase**.

---

# 🚀 Features

* ✅ Add new expenses
* ✅ Edit existing expenses
* ✅ Delete expenses
* ✅ Firebase Realtime Database integration
* ✅ Offline support with AsyncStorage
* ✅ Automatic data synchronization
* ✅ Latest expenses sorting
* ✅ Loading indicator while fetching data
* ✅ Clean and reusable component structure
* ✅ Context API state management

---

# 🧠 Tech Stack

| Technology                 | Purpose                 |
| -------------------------- | ----------------------- |
| React Native               | Mobile app framework    |
| Context API                | Global state management |
| Axios                      | HTTP requests           |
| Firebase Realtime Database | Cloud backend           |
| AsyncStorage               | Offline local storage   |
| date-fns                   | Date formatting         |
| React Navigation           | Navigation system       |

---

# 📂 Project Structure

```text
.
├── assets/
│   └── colors/
│
├── components/
│   ├── ExpenseCard.js
│   └── PressableIcon.js
│
├── screens/
│   ├── HomeScreen.js
│   └── ExpenseForm.js
│
├── services/
│   └── http.js
│
├── store/
│   └── expenseContext.js
│
└── App.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

# 🔥 Firebase Setup (IMPORTANT)

This project uses **Firebase Realtime Database**.

You must create your own Firebase project before running the app.

---

## 3️⃣ Create Firebase Project

Go to:

```text
https://console.firebase.google.com
```

Steps:

1. Create a new project
2. Open:

   ```text
   Build → Realtime Database
   ```
3. Create database
4. Select:

   ```text
   Start in test mode
   ```

---

## 4️⃣ Copy Database URL

Example:

```text
https://your-project-id-default-rtdb.firebaseio.com
```

---

## 5️⃣ Configure Axios Base URL

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

## ⚠️ Important

Do NOT add:

```text
/expenses.json
```

inside the base URL.

Correct:

```text
https://your-project-id-default-rtdb.firebaseio.com
```

Wrong:

```text
https://your-project-id-default-rtdb.firebaseio.com/expenses.json
```

---

# 🔐 Firebase Rules (Development Only)

Inside Firebase Realtime Database → Rules

Use:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

⚠️ These rules are only for development/testing.

---

# ▶️ Run the App

## Android

```bash
npx react-native run-android
```

---

## iOS

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

Expenses use the following date format:

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
* Firebase cloud synchronization
* Automatic local caching
* Async/Await based API handling
* Clean separation of concerns

---

# 🔄 Future Improvements

* 📊 Expense analytics & charts
* 📅 Monthly/weekly filtering
* 🔐 Firebase Authentication
* 🏷️ Expense categories
* 🌙 Dark/Light mode
* ☁️ Real-time syncing
* 📈 Budget tracking

---

# 🤝 Contributing

Contributions are welcome.

Feel free to:

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

# 🙌 Acknowledgements

* React Native Community
* Firebase
* Axios
* AsyncStorage Team
* date-fns

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
