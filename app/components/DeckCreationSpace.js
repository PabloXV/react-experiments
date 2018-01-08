import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {amber800} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber800,
    accent1Color: amber800,
  },
});

var cardData = [
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
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
  {
    title: 'Question about lattice constant',
    author: 'alexlin',
    content: 'I am a Quora question'
  },
];

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
    padding: '20px'
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  gridTile: {
    padding: 10,
    margin: 5,
  },
  cards: {
    height: '100%',
  },
  cardContent: {
    padding: 10,
  },
  paperDeckSpace: {
    height: cardData.length * 140,
    float: "right",
  }
};

class DeckCreationSpace extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div style={styles.container}>
          <h1>Your Deck</h1>

          <Paper style={styles.paperDeckSpace}>
            <GridList
              cols="3"
              cellHeight={280}
              style={styles.gridList}
            >
            {cardData.map((card, i) => (
              <GridTile
                key={i}
                title={card.title}
                subtitle={<span>by <b>{card.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                style={styles.gridTile}
              >
                <Paper style={styles.cards}><div style={styles.cardContent}>{card.content}</div></Paper>
              </GridTile>
            ))}
            </GridList>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default DeckCreationSpace;
