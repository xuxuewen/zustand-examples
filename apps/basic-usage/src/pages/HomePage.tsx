import React from 'react';
import { Link } from 'react-router-dom';
import { UserInfoButton } from '../components/UserInfoButton';
import { DownloadIcon } from '../components/DownloadIcon';
import { D3Chart } from '../components/D3Chart';

export const HomePage: React.FC = () => {
  const handleUserInfoClick = () => {
    console.log('User info button clicked');
  };

  const handleDownload = () => {
    console.log('Download clicked');
  };

  // 示例数据
  const chartData = [5, 10, 15, 20, 25, 30];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <UserInfoButton onClick={handleUserInfoClick} />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <DownloadIcon size={24} className="cursor-pointer" onClick={handleDownload} />
        <span>Download</span>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">D3 Chart</h2>
        <D3Chart data={chartData} />
      </div>
      <div className="mb-4">
        <Link to="/list" className="text-blue-500 hover:underline">
          Go to List Page
        </Link>
      </div>
    </div>
  );
};