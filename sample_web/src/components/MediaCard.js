import React from 'react';
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

const MediaCard = ({
  data = {
    title: "Title",
    text: "Text",
    category: {name: "", color: ""}
  }
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {data.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Chip
          variant="outlined"
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
        >
          Google検索
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
