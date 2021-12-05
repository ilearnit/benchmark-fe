import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { ssj2008 } from '@/services/ant-design-pro/api';

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
          id="pages.searchTable.updateForm.ruleName.benchmarkVersion"
          defaultMessage="Benchmark Version"
        />
      ),
      dataIndex: 'benchmarkVersion',
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
          id="pages.searchTable.updateForm.ruleName.hardwareVendor"
          defaultMessage="Hardware Vendor"
        />
      ),
      dataIndex: 'hardwareVendor',
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
          id="pages.searchTable.updateForm.ruleName.testMethod"
          defaultMessage="Test Method"
        />
      ),
      dataIndex: 'testMethod',
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
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps100"
          defaultMessage="ssjOps100"
        />
      ),
      dataIndex: 'ssjOps100',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps90"
          defaultMessage="ssjOps90"
        />
      ),
      dataIndex: 'ssjOps90',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps80"
          defaultMessage="ssjOps80"
        />
      ),
      dataIndex: 'ssjOps80',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps70"
          defaultMessage="ssjOps70"
        />
      ),
      dataIndex: 'ssjOps70',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps60"
          defaultMessage="ssjOps60"
        />
      ),
      dataIndex: 'ssjOps60',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps50"
          defaultMessage="ssjOps50"
        />
      ),
      dataIndex: 'ssjOps50',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps40"
          defaultMessage="ssjOps40"
        />
      ),
      dataIndex: 'ssjOps40',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps30"
          defaultMessage="ssjOps30"
        />
      ),
      dataIndex: 'ssjOps30',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps20"
          defaultMessage="ssjOps20"
        />
      ),
      dataIndex: 'ssjOps20',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.ssjOps10"
          defaultMessage="ssjOps10"
        />
      ),
      dataIndex: 'ssjOps10',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts100"
          defaultMessage="averageWatts100"
        />
      ),
      dataIndex: 'averageWatts100',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts90"
          defaultMessage="averageWatts90"
        />
      ),
      dataIndex: 'averageWatts90',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts80"
          defaultMessage="averageWatts80"
        />
      ),
      dataIndex: 'averageWatts80',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts70"
          defaultMessage="averageWatts70"
        />
      ),
      dataIndex: 'averageWatts70',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts60"
          defaultMessage="averageWatts60"
        />
      ),
      dataIndex: 'averageWatts60',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts50"
          defaultMessage="averageWatts50"
        />
      ),
      dataIndex: 'averageWatts50',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts40"
          defaultMessage="averageWatts40"
        />
      ),
      dataIndex: 'averageWatts40',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts30"
          defaultMessage="averageWatts30"
        />
      ),
      dataIndex: 'averageWatts30',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts20"
          defaultMessage="averageWatts20"
        />
      ),
      dataIndex: 'averageWatts20',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts10"
          defaultMessage="averageWatts10"
        />
      ),
      dataIndex: 'averageWatts10',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.averageWatts0"
          defaultMessage="averageWatts0"
        />
      ),
      dataIndex: 'averageWatts0',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower100"
          defaultMessage="performancePower100"
        />
      ),
      dataIndex: 'performancePower100',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower90"
          defaultMessage="performancePower90"
        />
      ),
      dataIndex: 'performancePower90',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower80"
          defaultMessage="performancePower80"
        />
      ),
      dataIndex: 'performancePower80',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower70"
          defaultMessage="performancePower70"
        />
      ),
      dataIndex: 'performancePower70',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower60"
          defaultMessage="performancePower60"
        />
      ),
      dataIndex: 'performancePower60',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower50"
          defaultMessage="performancePower50"
        />
      ),
      dataIndex: 'performancePower50',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower40"
          defaultMessage="performancePower40"
        />
      ),
      dataIndex: 'performancePower40',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower30"
          defaultMessage="performancePower30"
        />
      ),
      dataIndex: 'performancePower30',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower20"
          defaultMessage="performancePower20"
        />
      ),
      dataIndex: 'performancePower20',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.performancePower10"
          defaultMessage="performancePower10"
        />
      ),
      dataIndex: 'performancePower10',
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
          id="pages.searchTable.updateForm.ruleName.processorMHz"
          defaultMessage="Processor MHz"
        />
      ),
      dataIndex: 'processorMHz',
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
          id="pages.searchTable.updateForm.ruleName.cpuOrderable"
          defaultMessage="CPU Orderable"
        />
      ),
      dataIndex: 'cpuOrderable',
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
          id="pages.searchTable.updateForm.ruleName.operatingSystemVersion"
          defaultMessage="Operating System Version"
        />
      ),
      dataIndex: 'operatingSystemVersion',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.fileSystem"
          defaultMessage="Operating system"
        />
      ),
      dataIndex: 'File System',
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
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.memoryDescription"
          defaultMessage="Memory Description"
        />
      ),
      dataIndex: 'memoryDescription',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.networkController"
          defaultMessage="Network Controller"
        />
      ),
      dataIndex: 'networkController',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.nicsConnected"
          defaultMessage="Nics Connected"
        />
      ),
      dataIndex: 'nicsConnected',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.nicsEnabledFirmware"
          defaultMessage="Nics Enabled Firmware"
        />
      ),
      dataIndex: 'nicsEnabledFirmware',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.nicsEnabledOS"
          defaultMessage="Nics Enabled OS"
        />
      ),
      dataIndex: 'nicsEnabledOS',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.networkSpeed"
          defaultMessage="Network Speed"
        />
      ),
      dataIndex: 'networkSpeed',
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
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmVersion"
          defaultMessage="JVM Version"
        />
      ),
      dataIndex: 'jvmVersion',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmVersion"
          defaultMessage="JVM Version"
        />
      ),
      dataIndex: 'jvmVersion',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmInstances"
          defaultMessage="JVM Instances"
        />
      ),
      dataIndex: 'jvmInstances',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmAffinity"
          defaultMessage="JVM Affinity"
        />
      ),
      dataIndex: 'jvmAffinity',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmBitness"
          defaultMessage="JVM Bitness"
        />
      ),
      dataIndex: 'jvmBitness',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.jvmOptions"
          defaultMessage="JVM Options"
        />
      ),
      dataIndex: 'jvmOptions',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.initialHeap"
          defaultMessage="Initial Heap"
        />
      ),
      dataIndex: 'initialHeap',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.maxHeap"
          defaultMessage="Max Heap"
        />
      ),
      dataIndex: 'maxHeap',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.systemSource"
          defaultMessage="System Source"
        />
      ),
      dataIndex: 'systemSource',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.powerProvisioning"
          defaultMessage="Power Provisioning"
        />
      ),
      dataIndex: 'powerProvisioning',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.diskDrive"
          defaultMessage="Disk Drive"
        />
      ),
      dataIndex: 'diskDrive',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.diskController"
          defaultMessage="Disk Controller"
        />
      ),
      dataIndex: 'diskController',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.systemDesignation"
          defaultMessage="System Designation"
        />
      ),
      dataIndex: 'systemDesignation',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.powerManagement"
          defaultMessage="Power Management"
        />
      ),
      dataIndex: 'powerManagement',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.powerSupplyDetails"
          defaultMessage="Power Supply Details"
        />
      ),
      dataIndex: 'powerSupplyDetails',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.powerSuppliesInstalled"
          defaultMessage="Power Supplies Installed"
        />
      ),
      dataIndex: 'powerSuppliesInstalled',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.powerSupplyRatingWatts"
          defaultMessage="Power Supply Rating Watts"
        />
      ),
      dataIndex: 'powerSupplyRatingWatts',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hwAvail"
          defaultMessage="hwAvail"
        />
      ),
      dataIndex: 'hwAvail',
      valueType: 'dateMonth',
      ellipsis: true,
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.hwAswAvailvail"
          defaultMessage="swAvail"
        />
      ),
      dataIndex: 'swAvail',
      valueType: 'dateMonth',
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
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testedBy"
          defaultMessage="Tested by"
        />
      ),
      dataIndex: 'testedBy',
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.updateForm.ruleName.testSponsor"
          defaultMessage="Test Sponsor"
        />
      ),
      dataIndex: 'testSponsor',
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
        labelWidth: 200,
      }}
      request={ssj2008}
      columns={columns}
      scroll={{ y: 300, x: 10000 }}
    />
  );
};

export default TableList;
