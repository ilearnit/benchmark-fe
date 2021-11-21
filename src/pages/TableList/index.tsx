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
          id="pages.searchTable.updateForm.ruleName.nameLabel"
          defaultMessage="Rule name"
        />
      ),
      dataIndex: 'benchmarkType',
    },
  ];

  return (
    <ProTable<API.RuleListItem, API.PageParams>
      rowKey="id"
      search={{
        labelWidth: 120,
      }}
      request={benchmark2017}
      columns={columns}
    />
  );
};

export default TableList;
