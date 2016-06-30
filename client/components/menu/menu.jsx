import React from 'react';
import Drawer from 'material-ui/Drawer';

// TODO: add back button to close menu
// TODO: add link to github, twitter and linkedin
// TODO: add philosophical tidbits about me

const Menu = ({ isOpen }) => (
  <Drawer open={isOpen} />
);

export default Menu;
