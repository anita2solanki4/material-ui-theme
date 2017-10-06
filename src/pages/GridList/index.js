import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
// import Subheader from 'material-ui/List/ListSubheader';
// import IconButton from 'material-ui/IconButton';
// import InfoIcon from 'material-ui-icons/Info';
// import StarBorderIcon from 'material-ui-icons/StarBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    width: 500,
    height: 450,

  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList2: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar1: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


function Gridlist(props) {
  const classes = props.classes;

  return(
    <div>
      <h3>Grid List</h3>
      <p>Grid lists are an alternative to standard list views. A grid list consists of a repeated pattern of cells arrayed in a vertical and horizontal layout.</p>
      <p>Grid lists are best used on similar data types. They help improve the visual comprehension of the content they contain.</p>

      <h3>Image-only Grid list</h3>
      <p>A simple example of a scrollable image GridList.</p>
      {/*<div className={classes.root}>*/}
        {/*<GridList cellHeight={160} className={classes.gridList} cols={3}>*/}
          {/*{tileData.map(tile => (*/}
            {/*<GridListTile key={tile.img} cols={tile.cols || 1}>*/}
              {/*<img src={tile.img} alt={tile.title} />*/}
            {/*</GridListTile>*/}
          {/*))}*/}
        {/*</GridList>*/}
      {/*</div>*/}

      <h3>Grid list with titlebars</h3>
      <p>This example demonstrates the use of the GridListTileBar to add an overlay to each GridListTile. The overlay can accommodate a title, subtitle and secondary action - in this example an IconButton.</p>
      <div className={classes.root}>
        {/*<GridList cellHeight={160} className={classes.gridList} cols={3}>*/}
          {/*{tileData.map(tile => (*/}
            {/*<GridListTile key={tile.img} cols={tile.cols || 1}>*/}
              {/*<img src={tile.img} alt={tile.title} />*/}
            {/*</GridListTile>*/}
          {/*))}*/}
        {/*</GridList>*/}
      </div>

      <h3>Advanced Grid list</h3>
      <p>This example demonstrates "featured" tiles, using the rows and cols props to adjust the size of the tile, and the padding prop to adjust the spacing. The tiles have a customised titlebar, positioned at the top and with a custom gradient titleBackground. The secondary action IconButton is positioned on the left.</p>
      <div className={classes.root}>
        {/*<GridList cellHeight={200} spacing={1} className={classes.gridList2}>*/}
          {/*{tileData.map(tile => (*/}
            {/*<GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>*/}
              {/*<img src={tile.img} alt={tile.title} />*/}
              {/*<GridListTileBar*/}
                {/*title={tile.title}*/}
                {/*titlePosition="top"*/}
                {/*actionIcon={*/}
                  {/*<IconButton>*/}
                    {/*<StarBorderIcon color="white" />*/}
                  {/*</IconButton>*/}
                {/*}*/}
                {/*actionPosition="left"*/}
                {/*className={classes.titleBar1}*/}
              {/*/>*/}
            {/*</GridListTile>*/}
          {/*))}*/}
        {/*</GridList>*/}
      </div>

      <h3>Single line Grid list</h3>
      <p>This example demonstrates a horizontal scrollable single-line grid list of images. Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery.</p>
      <div className={classes.root}>
        {/*<GridList className={classes.gridList2} cols={2.5}>*/}
          {/*{tileData.map(tile => (*/}
            {/*<GridListTile key={tile.img}>*/}
              {/*<img src={tile.img} alt={tile.title} />*/}
              {/*<GridListTileBar*/}
                {/*title={tile.title}*/}
                {/*classes={{*/}
                  {/*root: classes.titleBar,*/}
                  {/*title: classes.title,*/}
                {/*}}*/}
                {/*actionIcon={*/}
                  {/*<IconButton>*/}
                    {/*<StarBorderIcon className={classes.title} />*/}
                  {/*</IconButton>*/}
                {/*}*/}
              {/*/>*/}
            {/*</GridListTile>*/}
          {/*))}*/}
        {/*</GridList>*/}
      </div>
    </div>
  )

}
Gridlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gridlist);