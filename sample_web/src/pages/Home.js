import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../components/ImgMediaCard';

const styles = theme => ({
  root: {
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h3>コース選択</h3>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <ImgMediaCard
              data={{
                title: "コース１：検索",
                text: "レッドリスト検索",
                img: `${process.env.PUBLIC_URL}/static/img/red-list-search.jpg`,
                to: "/red-list-search"
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
