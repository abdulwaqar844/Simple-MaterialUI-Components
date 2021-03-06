import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import covid from './../images/covid.png'
import blog from './../images/blog.jpg'
import vlolly from './../images/virtual-lolly-app_netlify_app.jpg'
import './style.css'
const useStyles = makeStyles({
  root: {
    color:'blacky',
    maxWidth: 450,
    textAlign: 'center',
    backgroundColor: "  rgba(173, 173, 173, 0.521)"


  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <h1 className='project-title' >Projects</h1>
      <hr />
      <Grid container className="project-list" spacing={1}>

        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={covid}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                  Covid Trackinp Application          </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  Covid Tracker Track Data of All infected Patients form all over the World. Record of Covid Patients Country wise also available          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="url-btn">
              <a href="https://covid19-trackingapp.surge.sh/">
                <Button size="medium" color="primary">
                  URL</Button>
        </a>
              <a href="https://github.com/abdulwaqar844/Covid19-Tracker">  <Button size="medium" color="primary">
                GitHub
              </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={vlolly}
                title="Virtual Lolly Application"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Virtual Lolly Application
          </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="url-btn">
              <a href="https://virtual-lolly-app.netlify.app/"><Button size="medium" color="primary">
                URL
        </Button></a>
              <a href="https://github.com/abdulwaqar844/Virtual-Lolly-app"> <Button size="medium" color="primary">
                GitHub
        </Button></a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={blog}
                title="Virtual Lolly Application"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  contentful blog
 </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="url-btn">
              <a href="https://contentfulapi-gatsby.netlify.app/blog/"><Button size="medium" color="primary">
                URL
        </Button></a>
              <a href="https://github.com/abdulwaqar844/gatsby-netlify-contentful"> <Button size="medium" color="primary">
                GitHub
        </Button></a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
