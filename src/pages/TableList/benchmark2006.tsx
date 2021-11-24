import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { benchmark2006 } from '@/services/ant-design-pro/api';

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
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hardwareVendor"
          defaultMessage="Hardware vendor"
        />
      ),
      dataIndex: 'hardwareVendor',
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
          id="pages.searchTable.updateForm.ruleName.Result"
          defaultMessage="Result"
        />
      ),
      dataIndex: 'result',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.baseLine"
          defaultMessage="Base line"
        />
      ),
      dataIndex: 'baseLine',
      ellipsis: true,
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
          id="pages.searchTable.updateForm.ruleName.coresPerChip"
          defaultMessage="Cores Per Chip"
        />
      ),
      dataIndex: 'coresPerChip',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.threadsPerCore"
          defaultMessage="Threads Per Core"
        />
      ),
      dataIndex: 'threadsPerCore',
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
          id="pages.searchTable.updateForm.ruleName.processorCharacteristics"
          defaultMessage="Processor Characteristics"
        />
      ),
      dataIndex: 'processorCharacteristics',
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
          defaultMessage="File system"
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
      dataIndex: 'hwAvail',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.swAvail"
          defaultMessage="sw Avail"
        />
      ),
      dataIndex: 'swAvail',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testDate"
          defaultMessage="Test date"
        />
      ),
      dataIndex: 'testDate',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.published"
          defaultMessage="published"
        />
      ),
      dataIndex: 'published',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.updated"
          defaultMessage="updated"
        />
      ),
      dataIndex: 'updated',
      valueType: 'dateMonth',
    },
  ];

  return (
    <ProTable<API.RuleListItem, API.PageParams>
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      request={benchmark2006}
      columns={columns}
      scroll={{ y: 300, x: 3000 }}
    />
  );
};

export default TableList;
