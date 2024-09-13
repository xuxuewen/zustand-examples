import React from 'react';
import { TableList } from '../components/TableList';

export const ListPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <TableList />
    </div>
  );
};