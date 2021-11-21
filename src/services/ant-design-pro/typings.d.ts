// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    id?: number;
    benchmarkType?: string;
    hardwareVendor: string;
    system?: string;
    peakResult?: number;
    baseResult?: number;
    energyPeakResult?: number;
    energyBaseResult?: number;
    cores?: number;
    chips?: number;
    enabledThreadsPerCore?: number;
    processor?: string;
    processorMhz?: number;
    cpusOrderable?: string;
    parallelization?: boolean;
    basePointerSize?: string;
    peakPointerSize?: string;
    firstLevelCache?: string;
    secondLevelCache?: string;
    thirdLevelCache?: string;
    otherCache?: string;
    memory?: string;
    storage?: string;
    operatingSystem?: string;
    fileSystem?: string;
    compiler?: string;
    license?: string;
    testedBy?: string;
    testSponsor?: string;
    disclosure?: string;
    hwAvail?: string;
    swAvail?: string;
    testDate?: string;
    published?: string;
    updated?: string;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
