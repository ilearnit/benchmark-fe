import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { jvm2008 } from '@/services/ant-design-pro/api';

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
          id="pages.searchTable.updateForm.ruleName.company"
          defaultMessage="Company"
        />
      ),
      dataIndex: 'company',
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
          id="pages.searchTable.updateForm.ruleName.result"
          defaultMessage="Result"
        />
      ),
      dataIndex: 'result',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.jvm" defaultMessage="JVM" />
      ),
      dataIndex: 'jvm',
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
          id="pages.searchTable.updateForm.ruleName.logicalCPUs"
          defaultMessage="Logical CPUs"
        />
      ),
      dataIndex: 'logicalCPUs',
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
          id="pages.searchTable.updateForm.ruleName.cpuSpeed"
          defaultMessage="CPU Speed"
        />
      ),
      dataIndex: 'cpuSpeed',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.firstCache"
          defaultMessage="First Cache"
        />
      ),
      dataIndex: 'firstCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.secondLevelCache"
          defaultMessage="Second Level Cache"
        />
      ),
      dataIndex: 'secondLevelCache',
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
          defaultMessage="Memory"
        />
      ),
      dataIndex: 'memory',
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="pages.searchTable.updateForm.ruleName.os" defaultMessage="OS" />,
      dataIndex: 'os',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hwAvail"
          defaultMessage="HW Avail"
        />
      ),
      dataIndex: 'hwAvail',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.swAvail"
          defaultMessage="SW Avail"
        />
      ),
      dataIndex: 'swAvail',
      valueType: 'dateMonth',
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
          defaultMessage="testedBy"
        />
      ),
      dataIndex: 'testedBy',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testDate"
          defaultMessage="testDate"
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
        labelWidth: 200,
      }}
      request={jvm2008}
      columns={columns}
      scroll={{ y: 300, x: 3000 }}
    />
  );
};

export default TableList;
