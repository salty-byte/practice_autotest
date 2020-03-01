import React from 'react';
import { withRouter } from 'react-router';
import { parse } from 'query-string';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip, Zoom } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MediaCard from '../components/MediaCard';
import RedListSimpleSearchForm from '../components/RedListSimpleSearchForm';

const styles = theme => ({
  root: {
  },
  resultContainer: {
    marginTop: 10
  },
  tooltip: {
    marginleft: 10,
    fontSize: 12
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

    const tootTipTitle = () => {
      return (
        <span className={classes.tooltip}>
          レッドリストとは、絶滅のおそれのある野生生物の種のリストです。
          この検索機能では、環境省が公開しているレッドリストから種別ごとに一覧を表示できます。<br />
         【哺乳類】のみ対応しています。
        </span>
      )
    }

    return (
      <div className={classes.root}>
        <h3>
          レッドリスト検索
          <Tooltip
            TransitionComponent={Zoom}
            title={tootTipTitle()}
          >
            <HelpOutlineIcon color="secondary" fontSize="small" />
          </Tooltip>
        </h3>
        <RedListSimpleSearchForm defaultCategory={id} categories={categories}/>
        {
          items.length !== 0 && (
            <Grid className={classes.resultContainer} container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body2" color="secondary">
                  {items.length}件ヒット
                </Typography>
              </Grid>
              {
                items.map(v => (
                  <Grid key={v.id} item xs={12} sm={6} md={4}>
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
          )
        }
      </div>
    );
  }
}

export default withStyles(styles)(
  withRouter(RedListSearch)
);
