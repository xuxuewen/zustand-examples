import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ListPage } from './pages/ListPage';
import { LoginPage } from './pages/LoginPage';
import { D3ChartsPage } from './pages/D3ChartsPage';
import { ListDemoPage } from './pages/ListDemoPage';
import { Header } from './components/Header';
import { useAuthStore } from './store';

function App() {
  const { username, logout } = useAuthStore();

  return (
    <Router>
      <Header username={username || 'Guest'} onLogout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/d3/charts" element={<D3ChartsPage />} />
        <Route path="/list-demo" element={<ListDemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
