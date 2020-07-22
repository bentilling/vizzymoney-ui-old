import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navigation = () => {
  return (
    <Menu fixed="top" inverted>
      <Menu.Item as="a" header>
        vizzymoney
      </Menu.Item>
      <Menu.Item as="a" active>
        Transactions
      </Menu.Item>
      <Menu.Item as="a">Other</Menu.Item>
    </Menu>
  );
};

export default Navigation;
