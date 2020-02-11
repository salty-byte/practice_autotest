import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';

// スタイル
const styles = {
  wrapper: {
    marginLeft: 30,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'column',
  }
};

const WrappedContent = (TargetComponent) => {

  const Content = class extends React.Component {

    render() {
      const { classes } = this.props;
      return (
        <Scrollbars>
          <div className={classes.wrapper}>
            <TargetComponent />
          </div>
        </Scrollbars>
      );
    }
  };

  return withStyles(styles)(Content);
};

export default WrappedContent;
