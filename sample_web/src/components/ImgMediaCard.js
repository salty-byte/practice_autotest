import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import RouterLink from '../components/RouterLink';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const ImgMediaCard = ({
  data = {
    title: "Title",
    text: "Text",
    img: "",
    to: ""
  },
  color = "primary"
}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <RouterLink to={data.to}>
          <CardMedia
            className={classes.media}
            image={data.img}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.text}
            </Typography>
          </CardContent>
        </RouterLink>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;
