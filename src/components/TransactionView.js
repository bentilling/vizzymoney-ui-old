import React from 'react';
import { Table } from 'semantic-ui-react';
import api from '../api';

class TransactionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    api
      .get('transactions')
      .then((results) => this.setState({ data: results.data }));
  }

  render() {
    const { data } = this.state;
    console.log(data);
    const headers =
      data.length > 0
        ? Object.keys(data[0]).map((column) => (
          <Table.HeaderCell key={column}>{column}</Table.HeaderCell>
          ))
        : '';
    const rows =
      data.length > 0
        ? data.map((record) => {
            return (
              <Table.Row>
                {Object.values(record).map((val) => {
                  return <Table.Cell>{val}</Table.Cell>;
                })}
              </Table.Row>
            );
          })
        : '';

    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>{headers}</Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default TransactionView;
