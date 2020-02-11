import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItem';

import logo from '../resources/img/logo.png';

const menuWidth = 240;
const headerHight = 64;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    position: 'absolute',
    marginLeft: menuWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${menuWidth}px)`,
    },
  },
  toolBar: {
    justifyContent: 'space-between',
    minHeight: headerHight,
  },
  navIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
    height: 50,
    width: "auto"
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  sideMenu: {
    width: menuWidth,
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: headerHight,
    paddingLeft: 0,
    paddingRight: 0,
    //[theme.breakpoints.up('md')]: {
    //  paddingBottom: 10,
    //},
  }
});

class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      shareDialogOpen: false,
    };
  }

  closeMenu = () => {
    this.setState({ mobileOpen: false });
  }
  openMenu = () => {
    this.setState({ mobileOpen: true });
  }

  render() {
    const { classes } = this.props;
    const sideMenu = (
      <div>
        <List>
          <MenuItem
            to="/"
            onClick={this.closeMenu}
            icon={<HomeIcon />}
            text="トップ"
            />
        </List>
        <Divider />
        <List>
          <MenuItem
            to="/settings"
            onClick={this.closeMenu}
            icon={<SettingsIcon />}
            text="設定"
            />
          <MenuItem
            to="/info"
            onClick={this.closeMenu}
            icon={<InfoIcon />}
            text="情報"
            />
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              onClick={this.openMenu}
              className={classes.navIcon}
              >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img className={classes.logo} src={logo} alt="DemoTes" />
            </Link>
            <Box display="flex" justifyContent="flex-end"></Box>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.closeMenu}
            classes={{paper: classes.sideMenu}}
            ModalProps={{keepMounted: true}}
            >
            <div className={classes.menuHeader}>
          　  <IconButton onClick={this.closeMenu}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            {sideMenu}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{paper: classes.sideMenu}}
            >
            {sideMenu}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainFrame);
