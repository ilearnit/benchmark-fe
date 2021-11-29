import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { jbb2015 } from '@/services/ant-design-pro/api';

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
          id="pages.searchTable.updateForm.ruleName.maxJops"
          defaultMessage="Max Jops"
        />
      ),
      dataIndex: 'maxJops',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.criticalJops"
          defaultMessage="Critical Jops"
        />
      ),
      dataIndex: 'criticalJops',
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
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmVendor"
          defaultMessage="JVM Vendor"
        />
      ),
      dataIndex: 'jvmVendor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.nodes" defaultMessage="Nodes" />
      ),
      dataIndex: 'nodes',
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
          id="pages.searchTable.updateForm.ruleName.threadsTotal"
          defaultMessage="Threads Total"
        />
      ),
      dataIndex: 'threadsTotal',
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
          id="pages.searchTable.updateForm.ruleName.cpuCharacteristics"
          defaultMessage="CPU Characteristics"
        />
      ),
      dataIndex: 'cpuCharacteristics',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.primaryCache"
          defaultMessage="Primary Cache"
        />
      ),
      dataIndex: 'primaryCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.secondaryCache"
          defaultMessage="Secondary Cache"
        />
      ),
      dataIndex: 'secondaryCache',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.tertiaryCache"
          defaultMessage="Tertiary Cache"
        />
      ),
      dataIndex: 'tertiaryCache',
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
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.memoryDetails"
          defaultMessage="Memory Details"
        />
      ),
      dataIndex: 'memoryDetails',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.dimms" defaultMessage="DIMMS" />
      ),
      dataIndex: 'dimms',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.disk" defaultMessage="Disk" />
      ),
      dataIndex: 'disk',
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
          id="pages.searchTable.updateForm.ruleName.operatingSystem"
          defaultMessage="Operating System"
        />
      ),
      dataIndex: 'operatingSystem',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.osVendor"
          defaultMessage="OS Vendor"
        />
      ),
      dataIndex: 'osVendor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.nics" defaultMessage="NICS" />
      ),
      dataIndex: 'nics',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage id="pages.searchTable.updateForm.ruleName.psu" defaultMessage="PSU" />
      ),
      dataIndex: 'psu',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.formFactor"
          defaultMessage="Form Factor"
        />
      ),
      dataIndex: 'formFactor',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.enclosure"
          defaultMessage="Enclosure"
        />
      ),
      dataIndex: 'enclosure',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hardwareAvailability"
          defaultMessage="hardware Availability"
        />
      ),
      dataIndex: 'hardwareAvailability',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmAvailability"
          defaultMessage="JVM Availability"
        />
      ),
      dataIndex: 'jvmAvailability',
      valueType: 'dateMonth',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.swAvailability"
          defaultMessage="sw Availability"
        />
      ),
      dataIndex: 'swAvailability',
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
      request={jbb2015}
      columns={columns}
      scroll={{ y: 300, x: 3000 }}
    />
  );
};

export default TableList;
