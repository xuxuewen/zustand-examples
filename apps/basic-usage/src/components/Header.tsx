import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon } from '@heroicons/react/24/outline'; // 导入 Heroicons

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold">Welcome, {username}</span>
        <Link to="/" className="text-blue-500 hover:underline flex items-center space-x-1">
          <HomeIcon className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link to="/d3/charts" className="text-blue-500 hover:underline flex items-center space-x-1">
          <ChartBarIcon className="h-5 w-5" />
          <span>D3 Charts</span>
        </Link>
      </div>
      <Button type="primary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};