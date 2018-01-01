import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import {amber800} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber800,
    accent1Color: amber800,
  },
});

const MenuData = [
  {
    title: 'Home',
    link: 'link',
  },
  {
    title: 'Shuffle',
    link: 'link',
  },
  {
    title: 'Browse',
    link: 'link',
  },
];

class KnackNavBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      drawerOpen: false
    };
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Knack"
          onLeftIconButtonClick={() => this.setState({drawerOpen: true})}
        >

        </AppBar>
        <Drawer
          docked={false}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
          open={this.state.drawerOpen}
        >
          {MenuData.map((item) => (
            <MenuItem>
              {item.title}
            </MenuItem>
          ))}
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default KnackNavBar;
