import React, { useState } from 'react';

interface UserIconProps {
  size?: number;
  className?: string;
}

export const UserIcon: React.FC<UserIconProps> = ({ size = 24, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const color = isHovered ? '#3B82F6' : '#000000';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-colors duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
};