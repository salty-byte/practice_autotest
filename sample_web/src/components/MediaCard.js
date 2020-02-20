import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const MediaCard = (props) => {
  const classes = useStyles();
  const data = props.data;

  const searchCategory = (id) => {
    props.history.push(`/red-list-search?category=${id}`);
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">
            {data.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {data.eng}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Chip
          variant="outlined"
          onClick={() => searchCategory(data.category.id)}
          size="small"
          label={data.category.name}
          style={{
            color: data.category.color,
            borderColor: data.category.color
          }}
        />
        <Button
          size="small"
          color="primary"
          href={`https://www.google.com/search?q=${data.name}`}
          target="_blank"
        >
          Google検索
        </Button>
      </CardActions>
    </Card>
  );
};

MediaCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    eng: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  })
};

export default withRouter(MediaCard);
