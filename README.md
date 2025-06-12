<<<<<<< HEAD
# BarCodeScanApp

BarCodeScanApp is a full-stack mobile application built with React Native (frontend) and Node.js with MongoDB (backend) to scan barcodes, save the scanned data to a database, and view all scanned batches.

## 📁 Project Structure

BarCodeScanApp/
├── ScanApp/ # Frontend - React Native App
│ ├── App.js
│ ├── screens/
│ │ ├── HomeScreen.js
│ │ ├── LocationScreen.js
│ │ └── BatchScreen.js
│ ├── package.json

├── backend/ # Backend - Node.js + Express + MongoDB
│ ├── server.js
│ ├── models/
│ │ └── Scan.js
│ ├── .env
│ ├── package.json
├── README.md

## 📱 Features

- Scan barcodes using camera (`expo-barcode-scanner`)
- Save scanned data to MongoDB
- View all scanned batches with timestamps
- Responsive UI with navigation

---

## 🚀 Getting Started

### Frontend (React Native)

```bash
cd ScanApp
npm install
npm start

Ensure your Expo Go app is running on the same network as your backend.
```

🔗 API Endpoints
POST /scan – Save scanned barcode

GET /scans – Get all scanned entries


📦 Tech Stack
React Native (Expo)

Node.js + Express

MongoDB + Mongoose

dotenv, CORS

👤 Author
Developed by Sundram Pandey
Github: https://github.com/sundram-29

📝 License
MIT License
=======
# BarCodeScanApp
>>>>>>> b514b47b03330378297c53b8f84b1cc3f14828c8
