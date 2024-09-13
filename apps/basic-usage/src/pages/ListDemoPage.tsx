import React from 'react';
import { Input, Select, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export const ListDemoPage: React.FC = () => {
  return (
    <div className="bg-white relative w-[1440px] h-[845px] overflow-hidden">
      <div className="bg-[#f7f8fa] w-full h-full">
        <div className="bg-[url('/images/header-bg.png')] w-full h-14" />
        <div className="shadow-md bg-white relative w-[1344px] h-[747px] mt-4 ml-20">
          <span className="text-[#1d2129] text-sm font-semibold leading-[22px] mt-4 ml-4">规则管理</span>
          <div className="flex items-center w-[1312px] h-8 mt-4 ml-4">
            <div className="flex items-center bg-white rounded border border-[#e5e6eb] w-[140px] h-8 mr-4">
              <span className="text-[#1d2129] text-sm leading-[22px] ml-3">规则状态</span>
              <img className="w-4 h-4 ml-auto mr-2" src="/images/dropdown-arrow.png" alt="Dropdown" />
            </div>
            <div className="flex items-center bg-white rounded border border-[#e5e6eb] w-[140px] h-8 mr-4">
              <span className="text-[#1d2129] text-sm leading-[22px] ml-3">调整类型</span>
              <img className="w-4 h-4 ml-auto mr-2" src="/images/dropdown-arrow.png" alt="Dropdown" />
            </div>
            <div className="flex items-center bg-white rounded border border-[#e5e6eb] w-[140px] h-8 mr-4">
              <span className="text-[#1d2129] text-sm leading-[22px] ml-3">层级</span>
              <img className="w-4 h-4 ml-auto mr-2" src="/images/dropdown-arrow.png" alt="Dropdown" />
            </div>
            <Input className="w-[180px] mr-4" placeholder="请输入规则名称" />
            <Button type="primary" className="mr-2">查 询</Button>
            <Button className="mr-2">重 置</Button>
            <Button type="primary" icon={<PlusOutlined />}>创建规则</Button>
          </div>
          <div className="flex justify-between w-[1312px] h-12 mt-4 ml-4">
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">规则名称</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">状态</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">调整类型</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">层级</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">创建时间</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
            <div className="flex items-center bg-[#f7f8fa] h-12">
              <span className="font-semibold ml-4">操作</span>
              <img className="w-4 h-4 ml-2" src="/images/sort-icon.png" alt="Sort" />
            </div>
          </div>
          {/* Table rows */}
          <div className="flex items-center w-[1312px] h-10 ml-4 border-b border-[#f2f3f5]">
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#4e5969]">规则名称很长很潮很长 很长 可能超过一行倍至Bixdo老-PL…</span>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#4e5969]">广告活动名称很长很长很…</span>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#4e5969]">2021-09-12  11:12:12</span>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#1d2129]">查看日志</span>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#1d2129] mr-2">修改</span>
              <span className="text-sm text-[#86909c]">删除</span>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-sm text-[#4e5969]">预算</span>
            </div>
          </div>
          {/* More rows... */}
          <div className="flex items-center w-[746px] h-[54px] mt-8 ml-[586px]">
            <div className="flex items-center mr-2">
              <div className="flex items-center">
                <img className="w-4 h-4" src="/images/success-icon.png" alt="Success" />
                <span className="ml-1">创建成功</span>
              </div>
            </div>
            <div className="flex items-center mr-2">
              <span className="mr-1">共50条</span>
              <img className="w-9 h-9" src="/images/prev-page.png" alt="Previous" />
            </div>
            <div className="flex items-center justify-center w-9 h-9 mr-2"><span>1</span></div>
            <div className="flex items-center justify-center w-9 h-9 mr-2 bg-[#eef4ff]"><span>2</span></div>
            <div className="flex items-center justify-center w-9 h-9 mr-2"><span>3</span></div>
            <div className="flex items-center justify-center w-9 h-9 mr-2"><span>···</span></div>
            <div className="flex items-center justify-center w-9 h-9 mr-2"><span>5</span></div>
            <img className="w-9 h-9 mr-2" src="/images/next-page.png" alt="Next" />
            <div className="flex items-center bg-[#f2f3f5] rounded w-24 h-9">
              <span className="ml-3">10条/页</span>
              <img className="w-4 h-4 ml-auto mr-2" src="/images/dropdown-arrow.png" alt="Dropdown" />
            </div>
          </div>
        </div>
        <div className="w-full h-[27px] mb-[1px]">
          <div className="w-16 h-[1066px] bg-[url('/images/sidebar-bg.png')] bg-no-repeat bg-cover mt-[-763px]">
            {/* Sidebar content */}
          </div>
        </div>
      </div>
    </div>
  );
};