import React from 'react';
import { Segment, Menu, Sidebar } from 'semantic-ui-react';
import TransactionView from './TransactionView';

const Navigation = () => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} visible animation="push" inverted width="thin">
        <Menu.Item as="a">Transactions</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <TransactionView />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Navigation;
