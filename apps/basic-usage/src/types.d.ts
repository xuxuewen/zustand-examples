declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module 'antd';
declare module '@ant-design/icons';

// 移除之前的 DownloadIcon 声明，因为现在它是一个正常的 TypeScript 组件