import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu secondary>
      <Menu.Item as="a" active>
        Transactions
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
