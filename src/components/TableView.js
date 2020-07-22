import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const TableView = (props) => {
  const { data, columns } = props;
  const headers = columns.map((column) => (
    <Table.HeaderCell key={column.desc}>{column.desc}</Table.HeaderCell>
  ));
  const rows = data.map((record) => {
    return (
      <Table.Row key={record.index}>
        {columns.map((column) => {
          return <Table.Cell key={column}>{record[column.field]}</Table.Cell>;
        })}
      </Table.Row>
    );
  });

  return (
    <div>
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>{headers}</Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
};

TableView.defaultProps = {
  columns: [],
  data: [],
};

TableView.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default TableView;
