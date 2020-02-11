import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import LicenseDialog from '../components/LicenseDialog';

const styles = {
  content: {
      marginTop: 10,
      marginBottom: 10
  }
};

class Info extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3>このサイトについて</h3>
        <div className={classes.content}>
          このサイトはWebアプリケーションテスト自動化練習用のデモサイトです。<br />
          データベースは使用していません。<br />
          また、Reactを使っているため、Wait処理を適宜入れる必要が出てくると思います。
        </div>
        <LicenseDialog />
      </div>
    );
  }
}

export  default withStyles(styles)(Info);
