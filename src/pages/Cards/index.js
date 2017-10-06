import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent,CardMedia,CardHeader } from 'material-ui/Card';
import classnames from 'classnames';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import red from 'material-ui/colors/red';

const styles = theme => ({
  card: {
    minWidth: 275,
    display: 'flex',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  media: {
    height: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Cards extends React.Component{
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  render(){
    const classes = this.props.classes;
    const bull = <span className={classes.bullet}>•</span>;
    return(
      <div>
        <h3>Cards</h3>
        <p>A card is a sheet of material that serves as an entry point to more detailed information.</p>
        <p>Cards display content composed of different elements whose size or supported actions vary.</p>
        <p>Cards are a convenient means of displaying content composed of different elements. They’re also well-suited for showcasing elements whose size or supported actions vary, like photos with captions of variable <length className=""></length></p>
        <h3>Simple Card</h3>
        <p>Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.</p>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="body1" className={classes.title}>
              Word of the Day
            </Typography>
            <Typography type="headline" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography type="body1" className={classes.pos}>
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>Learn More</Button>
          </CardActions>
        </Card>
        <h3>Media</h3>
        <p>Example of a card using an image to reinforce the content.</p>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography type="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
            </Button>
            <Button dense color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <h3>UI Controls</h3>
        <p>Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.</p>
        <p>Here's an example of a media control card.</p>
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography type="headline">Live From Space</Typography>
              <Typography type="subheading" color="secondary">
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Previous">
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label="Play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
              <IconButton aria-label="Next">
                <SkipNextIcon />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
        </Card>
        <h3>Complex Interaction</h3>
        <p>On desktop, card content can expand.</p>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}
export default withStyles(styles)(Cards);