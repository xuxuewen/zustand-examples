import React from 'react';
import { D3Chart } from '../components/D3Chart';

export const D3ChartsPage: React.FC = () => {
  // 示例数据
  const chartData = [5, 10, 15, 20, 25, 30];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">D3 Charts</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Sample D3 Chart</h2>
        <D3Chart data={chartData} />
      </div>
    </div>
  );
};