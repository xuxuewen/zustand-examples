import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ListPage } from './pages/ListPage';
import { LoginPage } from './pages/LoginPage'; // 假设你有一个 LoginPage 组件
import { D3ChartsPage } from './pages/D3ChartsPage'; // 导入 D3ChartsPage
import { Header } from './components/Header'; // 导入 Header 组件
import { useAuthStore } from './store'; // 导入 useAuthStore
import React from 'react';

function App() {
  const { username, logout } = useAuthStore(); // 从 store 中获取用户名和登出函数

  return (
    <Router>
      <HeaderWrapper username={username || 'Guest'} onLogout={logout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* 添加登录路由 */}
        <Route path="/d3/charts" element={<D3ChartsPage />} /> {/* 添加 D3ChartsPage 路由 */}
      </Routes>
    </Router>
  );
}

const HeaderWrapper: React.FC<{ username: string; onLogout: () => void }> = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return <Header username={username} onLogout={handleLogout} />;
};

export default App;
