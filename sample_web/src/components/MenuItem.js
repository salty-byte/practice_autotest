import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'

const MenuItem = ({to, onClick, icon, text}) => (
  <ListItem button component={Link} to={to} onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
