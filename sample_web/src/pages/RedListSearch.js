import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/MediaCard';

const styles = theme => ({
  root: {
  }
});

const itemList = () => {
  const data = require( "../resources/data.json" );
  return ({
    animals: data.animals,
    categories: data.categories
  });
};

class RedListSearch extends React.Component {
  render() {
    const { classes } = this.props;
    const { animals, categories} = itemList();
    return (
      <div className={classes.root}>
        <h3>レッドリスト検索</h3>
        <Grid container spacing={1}>
          {animals.map(v => (
            <Grid item xl={12} sm={6} md={4}>
              <MediaCard
                data = {{
                  title: v.name,
                  text: v.eng,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RedListSearch);
