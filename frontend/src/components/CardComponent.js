import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { withRouter } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardComponent = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const { title, description, author, publishedAt, content, urlToImage, url, source } =
    props.post;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const convertIsoDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <Card sx={{ maxWidth: '100%', width: 800, marginBottom: 10 }}>
      <CardHeader
       
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={author || source.name}
        subheader={convertIsoDate(publishedAt)}
      />
      <CardMedia
        component='img'
        height='400'
        image={urlToImage}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='description2' color='text.secondary'>
          {description || title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Button
          aria-label='share'
          href={url}
          target='_blank'
          size='small'
        >
           Read more...
        </Button>
        
      </CardActions>
     
    </Card>
  );
};

export default withRouter(CardComponent);
