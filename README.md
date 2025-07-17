# 🗨️ Xonnect : Real-time Chat Application

A full-stack **Real-time Chat App** built using **MERN Stack** (MongoDB, Express.js, React, Node.js) and **Socket.IO** for seamless, bidirectional real-time communication.

- Developed a **full-stack real-time chat application** supporting both **text and image sharing** using **Socket.IO** for low-latency, bidirectional communication.
- Integrated **image uploads** via form-data and real-time image rendering in chat threads to enhance user engagement.
- Implemented **JWT authentication**, secure user sessions, and protected routes for one-to-one private messaging.
- Designed a **responsive and modern UI** with **Tailwind CSS**, featuring auto-scroll, online/offline indicators, and mobile adaptability.
- Used **MongoDB** to persist user data and message metadata (including image URLs), ensuring reliable data storage.
- **Deployed both frontend and backend on Vercel** for unified and scalable production deployment.

🌐 **Live Demo:** [chat-app-beta-ashen.vercel.app](https://chat-app-beta-ashen.vercel.app/)

## ⚙️ Features

- 🔒 User Authentication (Signup / Login)
- 💬 Realtime One-to-One Messaging
- 🟢 Online/Offline User Indicators
- 📥 Instant Message and Image Delivery with Socket.IO
- 🎨 Clean and Responsive UI
- 🔁 Auto Scroll and Chat Updates
- 👤 Profile Management

## 🧰 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, Socket.IO
- **Database:** MongoDB
- **Authentication:** JWT-based auth
- **Deployment:** Vercel (frontend + backend)

## 📸 Screenshots

### 🧾 Signup Page
![Login Page](https://github.com/user-attachments/assets/5573892f-2453-4188-80ec-810bcf8b9290)

---

### 🧾 Signup Page (Contd.)
![Signup Page](https://github.com/user-attachments/assets/c23e356d-616e-4216-8502-943a2b0e3de6)

---

### 🔐 Login Page
![Chat UI](https://github.com/user-attachments/assets/0f9f6301-959f-415e-9a1e-8401286cbf41)

---

### 🟢 Online/Offline User Indicators
![Chatting with Online Users](https://github.com/user-attachments/assets/4f52972d-1096-49cd-aede-f9f7f557ac55)

---

### 👥 Chat Interface
![Responsive View](https://github.com/user-attachments/assets/bab6c640-f62b-4335-93c6-fa20422a7b43)

---

### 📱 Mobile Responsive Design 
![Auto Scroll](https://github.com/user-attachments/assets/47bd830d-ad78-4a53-bb7e-3b5a99f3e0f2)

---

### 🔁 Edit Profile details
![Online Status](https://github.com/user-attachments/assets/b2d89552-0fd9-4048-b4b5-1b1f4beea1d9)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/realtime-chat-app.git
cd realtime-chat-app

# Install dependencies
cd client
npm install

cd ../server
npm install

# Setup environment variables
# Create .env files in both client and server with appropriate values

# Run development servers
cd server
npm run dev

cd ../client
npm start
