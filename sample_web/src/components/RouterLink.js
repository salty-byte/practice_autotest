import React from 'react';
import { Link as RLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

class RouterLink extends React.Component {
  render() {
    const {to, children} = this.props;
    return (
      <Link component={RLink} to={to}>{children}</Link>
    );
  }
};

export default RouterLink;
