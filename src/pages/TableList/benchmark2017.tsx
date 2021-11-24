import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { benchmark2017 } from '@/services/ant-design-pro/api';

const TableList: React.FC = () => {
  const [] = useState<API.RuleListItem[]>([]);

  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.benchmarkType"
          defaultMessage="Benchmark type"
        />
      ),
      dataIndex: 'benchmarkType',
      ellipsis: true,
      width: 100,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hardwareVendor"
          defaultMessage="Hardware vendor"
        />
      ),
      dataIndex: 'hardwareVendor',
      // sorter: true,
      // hideInSearch: true,
      // hideInTable: true,
      // key: 'hardwareVendor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.system"
          defaultMessage="System"
        />
      ),
      dataIndex: 'system',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.peakResult"
          defaultMessage="Peak result"
        />
      ),
      dataIndex: 'peakResult',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.baseResult"
          defaultMessage="Base result"
        />
      ),
      dataIndex: 'baseResult',
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.cores" defaultMessage="Cores" />
      ),
      dataIndex: 'cores',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.chips" defaultMessage="Chips" />
      ),
      dataIndex: 'chips',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.enabledThreadsPerCore"
          defaultMessage="Enabled Threads Per Core"
        />
      ),
      dataIndex: 'enabledThreadsPerCore',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.processor"
          defaultMessage="Processor"
        />
      ),
      dataIndex: 'processor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.processorMhz"
          defaultMessage="Processor MHZ"
        />
      ),
      dataIndex: 'processorMhz',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.cpusOrderable"
          defaultMessage="CPUs orderable"
        />
      ),
      dataIndex: 'cpusOrderable',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.parallelization"
          defaultMessage="parallelization"
        />
      ),
      dataIndex: 'parallelization',
      render: (val) => (val ? 'YES' : 'No'),
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.basePointerSize"
          defaultMessage="Base Pointer Size"
        />
      ),
      dataIndex: 'basePointerSize',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.peakPointerSize"
          defaultMessage="Peak Pointer Size"
        />
      ),
      dataIndex: 'peakPointerSize',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.firstLevelCache"
          defaultMessage="First Level Cache"
        />
      ),
      dataIndex: 'firstLevelCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.secondLevelCache"
          defaultMessage="second Level Cache"
        />
      ),
      dataIndex: 'secondLevelCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.thirdLevelCache"
          defaultMessage="Third level cache"
        />
      ),
      dataIndex: 'thirdLevelCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.otherCache"
          defaultMessage="Other Cache"
        />
      ),
      dataIndex: 'otherCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.memory"
          defaultMessage="memory"
        />
      ),
      dataIndex: 'memory',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.storage"
          defaultMessage="storage"
        />
      ),
      dataIndex: 'storage',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.operatingSystem"
          defaultMessage="Operating system"
        />
      ),
      dataIndex: 'operatingSystem',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.fileSystem"
          defaultMessage="File System"
        />
      ),
      dataIndex: 'fileSystem',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.compiler"
          defaultMessage="compiler"
        />
      ),
      dataIndex: 'compiler',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.license"
          defaultMessage="License"
        />
      ),
      dataIndex: 'license',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testedBy"
          defaultMessage="Tested by"
        />
      ),
      dataIndex: 'testedBy',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testSponsor"
          defaultMessage="Test Sponsor"
        />
      ),
      dataIndex: 'testSponsor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hwAvail"
          defaultMessage="hw Avail"
        />
      ),
      valueType: 'dateMonth',
      dataIndex: 'hwAvail',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.swAvail"
          defaultMessage="sw Avail"
        />
      ),
      valueType: 'dateMonth',
      dataIndex: 'swAvail',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testDate"
          defaultMessage="Test date"
        />
      ),
      valueType: 'dateMonth',
      dataIndex: 'testDate',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.published"
          defaultMessage="published"
        />
      ),
      valueType: 'dateMonth',
      dataIndex: 'published',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.updated"
          defaultMessage="updated"
        />
      ),
      valueType: 'dateMonth',
      dataIndex: 'updated',
    },
  ];

  return (
    <ProTable<API.RuleListItem, API.PageParams>
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      request={benchmark2017}
      columns={columns}
      scroll={{ y: 300, x: 3000 }}
    />
  );
};

export default TableList;
