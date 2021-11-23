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
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hardwareVendor"
          defaultMessage="Hardware vendor"
        />
      ),
      dataIndex: 'hardwareVendor',
    },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.system"
    //       defaultMessage="System"
    //     />
    //   ),
    //   dataIndex: 'system',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.peakResult"
    //       defaultMessage="Peak result"
    //     />
    //   ),
    //   dataIndex: 'peakResult',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.baseResult"
    //       defaultMessage="Base result"
    //     />
    //   ),
    //   dataIndex: 'baseResult',
    // },
    // {
    //   title: (
    //     <FormattedMessage id="pages.searchTable.updateForm.ruleName.cores" defaultMessage="Cores" />
    //   ),
    //   dataIndex: 'cores',
    // },
    // {
    //   title: (
    //     <FormattedMessage id="pages.searchTable.updateForm.ruleName.chips" defaultMessage="Chips" />
    //   ),
    //   dataIndex: 'chips',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.enabledThreadsPerCore"
    //       defaultMessage="Enabled Threads Per Core"
    //     />
    //   ),
    //   dataIndex: 'enabledThreadsPerCore',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.processor"
    //       defaultMessage="Processor"
    //     />
    //   ),
    //   dataIndex: 'processor',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.processorMhz"
    //       defaultMessage="Processor MHZ"
    //     />
    //   ),
    //   dataIndex: 'processorMhz',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.cpusOrderable"
    //       defaultMessage="CPUs orderable"
    //     />
    //   ),
    //   dataIndex: 'cpusOrderable',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.parallelization"
    //       defaultMessage="parallelization"
    //     />
    //   ),
    //   dataIndex: 'parallelization',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.basePointerSize"
    //       defaultMessage="Base Pointer Size"
    //     />
    //   ),
    //   dataIndex: 'basePointerSize',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.peakPointerSize"
    //       defaultMessage="Peak Pointer Size"
    //     />
    //   ),
    //   dataIndex: 'peakPointerSize',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.firstLevelCache"
    //       defaultMessage="First Level Cache"
    //     />
    //   ),
    //   dataIndex: 'firstLevelCache',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.secondLevelCache"
    //       defaultMessage="second Level Cache"
    //     />
    //   ),
    //   dataIndex: 'secondLevelCache',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.thirdLevelCache"
    //       defaultMessage="Third level cache"
    //     />
    //   ),
    //   dataIndex: 'thirdLevelCache',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.otherCache"
    //       defaultMessage="Other Cache"
    //     />
    //   ),
    //   dataIndex: 'otherCache',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.memory"
    //       defaultMessage="memory"
    //     />
    //   ),
    //   dataIndex: 'memory',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.storage"
    //       defaultMessage="storage"
    //     />
    //   ),
    //   dataIndex: 'storage',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.operatingSystem"
    //       defaultMessage="Operating system"
    //     />
    //   ),
    //   dataIndex: 'operatingSystem',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.fileSystem"
    //       defaultMessage="Operating system"
    //     />
    //   ),
    //   dataIndex: 'File System',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.compiler"
    //       defaultMessage="compiler"
    //     />
    //   ),
    //   dataIndex: 'compiler',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.license"
    //       defaultMessage="License"
    //     />
    //   ),
    //   dataIndex: 'license',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.testedBy"
    //       defaultMessage="Tested by"
    //     />
    //   ),
    //   dataIndex: 'testedBy',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.testSponsor"
    //       defaultMessage="Test Sponsor"
    //     />
    //   ),
    //   dataIndex: 'testSponsor',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.hwAvail"
    //       defaultMessage="hw Avail"
    //     />
    //   ),
    //   dataIndex: 'hwAvail',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.swAvail"
    //       defaultMessage="sw Avail"
    //     />
    //   ),
    //   dataIndex: 'swAvail',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.testDate"
    //       defaultMessage="Test date"
    //     />
    //   ),
    //   dataIndex: 'testDate',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.published"
    //       defaultMessage="published"
    //     />
    //   ),
    //   dataIndex: 'published',
    // },
    // {
    //   title: (
    //     <FormattedMessage
    //       id="pages.searchTable.updateForm.ruleName.updated"
    //       defaultMessage="updated"
    //     />
    //   ),
    //   dataIndex: 'updated',
    // },
  ];

  return (
    <ProTable<API.RuleListItem, API.PageParams>
      rowKey="id"
      search={{
        labelWidth: 200,
      }}
      request={benchmark2017}
      columns={columns}
    />
  );
};

export default TableList;
