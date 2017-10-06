import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});
const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/grid-list/burgers.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Camera',
    width: '30%',
  },
];

class Buttons extends React.Component {
  render(){
    const classes = this.props.classes;
    return (
      <div>
        <h3>Buttons</h3>
        <p>Buttons communicate the action that will occur when the user touches them.</p>
        <p>Material buttons trigger an ink reaction on press. They may display text, imagery, or both. Flat buttons and raised buttons are the most commonly used types.</p>
        <h3>Flat Buttons</h3>
        <p>Flat buttons are text-only buttons. They may be used in dialogs, toolbars, or inline. They do not lift, but fill with color on press.</p>
        <Button>Default</Button>
        <Button color="primary">
          Primary
        </Button>
        <Button color="accent">
          Accent
        </Button>
        <Button color="contrast">
          Contrast
        </Button>
        <Button disabled>
          Disabled
        </Button>
        <Button href="#flat-buttons">
          Link
        </Button>
        <Button disabled href="/">
          Link disabled
        </Button>
        <Button dense>
          Dense
        </Button>
        <Button data-something="here I am">
          Does something
        </Button>
        <h3>Raised Buttons</h3>
        <p>Raised buttons are rectangular-shaped buttons. They may be used inline. They lift and display ink reactions on press.</p>
        <Button raised className={classes.button}>
          Default
        </Button>
        <Button raised color="primary" className={classes.button}>
          Primary
        </Button>
        <Button raised color="accent" className={classes.button}>
          Accent
        </Button>
        <Button raised color="contrast" className={classes.button}>
          Contrast
        </Button>
        <Button raised color="accent" disabled className={classes.button}>
          Disabled
        </Button>
        <input accept="jpg,jpeg,JPG,JPEG" className={classes.input} id="file" multiple type="file" />
        <label htmlFor="file">
          <Button raised component="span" className={classes.button}>
            Upload
          </Button>
        </label>
        <Button raised dense className={classes.button}>
          Dense
        </Button>
        <h3>Floating Action Buttons</h3>
        <p>A floating action button represents the primary action in an application. Shaped like a circled icon floating above the UI, it has an ink wash upon focus and lifts upon selection. When pressed, it may contain more related actions.</p>
        <p>Only one floating action button is recommended per screen to represent the most common action.</p>
        <Button fab color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button fab color="accent" aria-label="edit" className={classes.button}>
          <ModeEditIcon />
        </Button>
        <h3>Icon Buttons</h3>
        <p>Icon buttons are commonly found in app bars and toolbars.</p>
        <p>Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.</p>
        <IconButton className={classes.button} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
        <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="accent" className={classes.button} aria-label="Add an alarm">
          <Icon>alarm</Icon>
        </IconButton>
        <IconButton color="contrast" className={classes.button} aria-label="Add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <h3>Complex Buttons</h3>
        <p>The Flat Buttons, Raised Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower level component to build custom interactions.</p>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                type="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    );
  }
}


export default withStyles(styles)(Buttons)
