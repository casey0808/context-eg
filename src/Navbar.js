import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: "Search...",
    flag: "🏳‍🌈",
    darkMode: "Dark Mode"
  },
  chinese: {
    search: "搜索...",
    flag: "🚩",
    darkMode: "黑暗模式"
  }
};

function Navbar(props) {
    const { classes } = props;
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { search, flag, darkMode } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span role='img' aria-label='flag'>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              {darkMode}
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default withStyles(styles)(Navbar);
