import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import UserInfo from './UserInfo.tsx'
import './globals.css'  // 使用 globals.css 而不是 App.css

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
