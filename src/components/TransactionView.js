import React from 'react';
import { Dimmer, Loader, Message } from 'semantic-ui-react';
import api from '../api';

import TableView from './TableView';

const HEADERS = [
  { field: 'Account', desc: 'Account' },
  { field: 'Payee', desc: 'Payee' },
  { field: 'Category', desc: 'Category' },
  { field: 'Outflow', desc: 'Outflow' },
  { field: 'Date', desc: 'Date' },
];
class TransactionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], error: '' };
  }

  componentDidMount() {
    api
      .get('transactions')
      .then((results) => this.setState({ data: results.data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    const { data, error } = this.state;
    if (error) {
      return (
        <Message error>
          <Message.Header>{error}</Message.Header>
          <p>Please try again.</p>
        </Message>
      );
    }
    return data.length ? (
      <TableView data={data} columns={HEADERS} />
    ) : (
      <Dimmer active>
        <Loader>Loading...</Loader>
      </Dimmer>
    );
  }
}

export default TransactionView;
