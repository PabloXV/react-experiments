import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import {amber500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
    padding: '20px'
  },
  gridList: {
    width: '100%',
    height: 450,
    overflowY: 'auto',
  },
  gridTile: {
    padding: 10,
    margin: 5,
  },
  paperDecks: {
    height: '100%',
  },
  cardContent: {
    padding: 10,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber500,
  },
});

const cardData = [
  {
    title: 'Question about crystal structure',
    author: 'bazeem',
    content: 'I am a practice question'
  },
  {
    title: 'Lecture on polymerization',
    author: 'pxvpxv',
    content: 'I am a Youtube video'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
];

class Application extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    console.log('hi');
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Knack"
          onLeftIconButtonClick={() => this.setState({open: true})}
        >

        </AppBar>
        <Drawer
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}

        >
          <MenuItem>Browse</MenuItem>
          <MenuItem>Do stuff</MenuItem>
          <MenuItem>Dont do stuff</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Drawer>
        <div style={styles.container}>
          <h1>Your Deck</h1>

          <Paper>
            <GridList
              cols="3"
              cellHeight={180}
              style={styles.gridList}
            >
            {cardData.map((card) => (
              <GridTile
                key={card.title}
                title={card.title}
                style={styles.gridTile}
                subtitle={<span>by <b>{card.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <Paper style={styles.paperDecks}><div style={styles.cardContent}>{card.content}</div></Paper>
              </GridTile>
            ))}
            </GridList>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Application;
