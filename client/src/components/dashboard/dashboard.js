import React, { useState } from 'react';
import {
  FilteringState,
  IntegratedFiltering,
  DataTypeProvider
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel
} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import DateRange from '@material-ui/icons/DateRange';
import Data from './data';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';

const FilterIcon = ({ type, ...restProps }) => {
  if (type === 'month') return <DateRange {...restProps} />;
  return <TableFilterRow.Icon type={type} {...restProps} />;
};

export default () => {
  const [columns] = useState([
    { name: 'consignmentName', title: 'Consignment Name' },
    {
      name: 'consignmentNumber',
      title: 'Consignment Number'
    },
    { name: 'origin', title: 'Origin' },
    { name: 'destination', title: 'Destination' },
    { name: 'createdBy', title: 'Created By' },
    { name: 'dateCreated', title: 'Date Created' }
  ]);
  const [dateColumns] = useState(['dateCreated']);
  const [dateFilterOperations] = useState([
    'month',
    'contains',
    'startsWith',
    'endsWith'
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageSizes] = useState([5, 10, 15]);
  const [filteringColumnExtensions] = useState([
    {
      columnName: 'dateCreated',
      predicate: (value, filter, row) => {
        if (!filter.value.length) return true;
        if (filter && filter.operation === 'month') {
          const month = parseInt(value.split('-')[1], 10);
          return month === parseInt(filter.value, 10);
        }
        return IntegratedFiltering.defaultPredicate(value, filter, row);
      }
    }
  ]);

  return (
    <Paper>
      <Grid rows={Data} columns={columns}>
        <DataTypeProvider
          for={dateColumns}
          availableFilterOperations={dateFilterOperations}
        />
        <SortingState
          defaultSorting={[{ columnName: 'dateCreated', direction: 'asc' }]}
        />
        <IntegratedSorting />
        <FilteringState defaultFilters={[]} />
        <IntegratedFiltering columnExtensions={filteringColumnExtensions} />
        <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow />
        <PagingPanel pageSizes={pageSizes} />

        <Table />
        <TableHeaderRow showSortingControls />
        <TableFilterRow
          showFilterSelector
          iconComponent={FilterIcon}
          messages={{ month: 'Month equals' }}
          style={{
            marginRight: '2%'
          }}
        />
      </Grid>
    </Paper>
  );
};
