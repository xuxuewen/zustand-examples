import React, { useState } from 'react';
import DownloadSVG from '../assets/download-icon.svg';

interface DownloadIconProps {
  size?: number;
  className?: string;
  onClick?: () => void;  // 添加这一行
}

export const DownloadIcon: React.FC<DownloadIconProps> = ({ size = 24, className = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={DownloadSVG}
      alt="Download"
      width={size}
      height={size}
      className={`transition-colors duration-200 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}  // 添加这一行
      style={{ 
        filter: isHovered ? 'invert(45%) sepia(90%) saturate(1000%) hue-rotate(190deg) brightness(100%) contrast(95%)' : 'none',
        cursor: onClick ? 'pointer' : 'default'  // 添加这一行
      }}
    />
  );
};