import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// TODO: add back button to close menu
// TODO: add link to github, twitter and linkedin
// TODO: add philosophical tidbits about me

const Menu = ({ isOpen, handleMenuToggle }) => (
  <Drawer
    open={isOpen}
    docked={false}
    onRequestChange={e => handleMenuToggle()}
  >
    <MenuItem>Github</MenuItem>
    <MenuItem>Twitter</MenuItem>
    <MenuItem>LinkedIn</MenuItem>
  </Drawer>
);

export default Menu;
