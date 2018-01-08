import React, {Component} from 'react';
import {amber800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton';

const styles = {
  addButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber800,
    accent1Color: amber800,
  },
});


class AddCardButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <FloatingActionButton
          style={styles.addButton}
        >
          <ContentAdd />
        </FloatingActionButton>

      </MuiThemeProvider>
    );
  }
}

export default AddCardButton;
