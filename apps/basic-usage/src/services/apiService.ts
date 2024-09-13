const API_BASE_URL = 'https://sino-adtech-amz.meetdev';

// 请求类型
export interface AmzAsinCampaignListRequest {
  asin: string;  // ASIN
  period: {
    startTime: string;  // 开始时间
    endTime: string;  // 结束时间
    timeType: 'TODAY' | 'YESTERDAY' | 'LAST_7_DAYS' | 'THIS_WEEK' | 'LAST_WEEK' | 'LAST_30_DAYS' | 'THIS_MONTH' | 'LAST_MONTH' | 'CUSTOM';  // 时间类型
  };
  shops: Array<{
    marketplaceId: string;  // 站点ID
    sellerId: string;  // 店铺Id
    timeZone: string;  // 时区
  }>;
  sortFields: Array<{
    field: string;  // 排序字段
    type: 'DESC' | 'ASC';  // 排序规则
  }>;
  pageNum: number;  // 分页页数
  pageSize: number;  // 分页条数
}

// 响应类型
export interface AmzAsinCampaignVO {
  acos: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  adGroupId: string;  // 广告组Id
  adGroupName: string;  // 广告组名称
  adStatus: 'ENABLED' | 'PAUSED' | 'ARCHIVED' | 'OTHER';  // 广告活动开关
  advOrderCnt: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  advOrderCntRate: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  advSaleValue: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  advSaleValueRate: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  advType: 'SP' | 'SB' | 'SD';  // 广告类型
  asin: string;  // ASIN
  campaignId: string;  // 广告活动Id
  campaignName: string;  // 广告活动名称
  campaignNum: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  clicks: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  cpa: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  cpc: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  ctr: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  cvr: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  deliveringRecord: string;  // 不可用状态描述
  impressions: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  orderCnt: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  roas: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  saleValue: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  servingStatus: 'DELIVERING' | 'NOT_DELIVERING' | 'UNAVAILABLE';  // 广告活动状态
  spend: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  tacos: {
    metricName: string;  // 指标名称
    metricValue: number;  // 指标值
    metricDisplayName: string;  // 指标显示名称
    metricFormatValue: string;  // 指标格式化值
    currency: string;  // 币种
  };
  updateTime: string;  // 数据更新时间
}

export interface ApiResponse<T> {
  code: number;  // 主状态码，0 为成功，非 0 为失败
  message: string;  // 响应消息，通常为报错信息，描述发生了什么事
  data: {
    items: T[];  // 列表元素
    pageSize: number;  // 每页数据条数
    currentPage: number;  // 当前页码
    totalCount: number;  // 数据总数
    pageCount: number;  // 总页数
  };
}

export const getAsinCampaignList = async (request: AmzAsinCampaignListRequest): Promise<ApiResponse<AmzAsinCampaignVO>> => {
  const response = await fetch(`${API_BASE_URL}/v1/amz/admanage/campaign/asin-campaign-list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Sino-Userid': 'your-user-id', // 替换为实际的用户ID
      'accessContext': JSON.stringify({}), // 替换为实际的accessContext对象
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: ApiResponse<AmzAsinCampaignVO> = await response.json();
  return data;
};