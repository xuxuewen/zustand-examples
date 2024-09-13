import React from 'react';
import { UserIcon } from './UserIcon';

interface UserInfoButtonProps {
  onClick: () => void;
  className?: string;
}

export const UserInfoButton: React.FC<UserInfoButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 rounded-full hover:bg-gray-100 ${className}`}
    >
      <UserIcon size={28} />
    </button>
  );
};