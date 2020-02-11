import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MediaCard = ({
  data = {
    title: "Title",
    text: "Text"
  }
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Google検索
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
