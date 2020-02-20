import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/MediaCard';
import { parse } from 'query-string';
import RedListSimpleSearchForm from '../components/RedListSimpleSearchForm';

const styles = theme => ({
  root: {
  },
  resultContainer: {
    marginTop: 10
  }
});

const itemList = () => {
  const data = require( "../resources/data.json" );
  return ({
    animals: data.animals,
    categories: data.categories
  });
};

const searchAnimals = (animals, id) => {
  if(id === 0){
    return animals;
  }
  return animals.filter(v => v.category === id);
};

const getCategory = (categories, id) => {
  return categories.find(v => v.id === id);
}

class RedListSearch extends React.Component {
  render() {
    const { classes } = this.props;
    const query = parse(this.props.location.search);
    const id = parseInt(query.category, 10);
    const { animals, categories } = itemList();
    const items = searchAnimals(animals, id);

    return (
      <div className={classes.root}>
        <h3>レッドリスト検索</h3>
        <RedListSimpleSearchForm defaultCategory={id} categories={categories}/>
        <Grid className={classes.resultContainer} container spacing={1}>
          {
            items.map(v => (
              <Grid key={v.id} item xl={12} sm={6} md={4}>
                <MediaCard
                  data = {{
                    name: v.name,
                    eng: v.eng,
                    category: getCategory(categories, v.category)
                  }}
                />
              </Grid>
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RedListSearch);
