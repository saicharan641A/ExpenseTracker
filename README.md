# 💸 Expense Tracker App (React Native)

A simple and clean **Expense Tracker mobile app** built using **React Native**.
This app allows users to **add, edit, delete, and persist expenses** with a modern UI.

---

## 🚀 Features

* ➕ Add new expenses
* ✏️ Edit existing expenses
* 🗑️ Delete expenses
* 📅 Date formatting (DD-MM-YYYY)
* 📊 Sorted by latest date
* 💾 Persistent storage using AsyncStorage
* ⚡ Fast and responsive UI
* 🎯 Built with Context API (no prop drilling)

---

## 🧠 Tech Stack

* React Native
* Context API (State Management)
* AsyncStorage (Local Storage)
* date-fns (Date Formatting)
* React Navigation

---

## 📂 Project Structure

```
.
├── components/
│   ├── ExpenseCard.js
│   └── PressableIcon.js
│
├── screens/
│   ├── HomeScreen.js
│   └── ExpenseForm.js
│
├── store/
│   └── expense-context.js
│
├── assets/
│   └── colors/
│
└── App.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Install AsyncStorage (correct version)

If using Expo:

```bash
npx expo install @react-native-async-storage/async-storage
```

If using React Native CLI:

```bash
npm install @react-native-async-storage/async-storage
```

---

### 4️⃣ Run the app

#### Android

```bash
npx react-native run-android
```

#### iOS

```bash
npx pod-install
npx react-native run-ios
```

---

## 💾 Data Persistence

This app uses **AsyncStorage** to store expenses locally.

* Data is saved automatically on every change
* Data is loaded when the app starts
* Uses JSON serialization (`JSON.stringify` / `JSON.parse`)

---

## 🧩 Architecture

* **Context API** is used for global state management
* All CRUD operations are handled in a central store
* UI components remain clean and reusable

---

## 🔄 Future Improvements

* 📅 Filter by date (Today / Week / Month)
* ☁️ Cloud sync (Firebase / backend)
* 📈 Charts & analytics
* 🔐 User authentication

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 🙌 Acknowledgements

* React Native Community
* AsyncStorage Team
* date-fns library

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
