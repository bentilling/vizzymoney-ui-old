import React from 'react';
import api from '../api';

class TransactionView extends React.Component {
  componentDidMount() {
    api.get('transactions').then((results) => console.log(results));
  }

  render() {
    return <div>Transaction here!</div>;
  }
}

export default TransactionView;
