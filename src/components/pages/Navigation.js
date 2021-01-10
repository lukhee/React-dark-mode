import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContextConsumer } from '../../ThemeContext';
import { makeStyles, Button, Box } from '@material-ui/core';

const navData = [
  {
    id: 1,
    label: 'Home',
    routeTo: '/',
  },
  {
    id: 2,
    label: 'First',
    routeTo: '/first',
  },
  {
    id: 3,
    label: 'Second',
    routeTo: '/second',
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 3),
    marginBottom: theme.spacing(2),
    position: 'relative',
    background: 'red',
    display: 'flex',
    zIndex: '100',
    width: '100%',
    '& ul': {
      display: 'flex',
      width: '50%',
      justifyContent: 'space-between',
      alignItems: 'center',
      listStyleType: 'none',
      '& li': {
        padding: theme.spacing(1, 2),
        background: theme.palette.background.paper,
        borderRadius: '2px',
      },
    },
  },
  toggleButton: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  light: {
    padding: theme.spacing(0, 0.5),
    marginLeft: theme.spacing(0.5),
    width: '40px',
    borderRadius: '5px',
    display: 'flex',
  },
  darKMoon: {
    background: 'white',
    justifyContent: 'flex-end',
  },
  sunLight: {
    background: 'black',
    display: 'flex',
  },
}));

export const Navigation = () => {
  const classes = useStyle();
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={classes.root}>
          <ul>
            {navData.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.routeTo}> {nav.label} </Link>
              </li>
            ))}
          </ul>
          <div className={classes.toggleButton}>
            <Box my="auto" color="text.primary">
              <h4> toggle </h4>
            </Box>
            <Button onClick={context.toggleTheme}>
              <span
                className={`${classes.light}
                  ${
                    context.theme === 'Day'
                      ? classes.darKMoon
                      : classes.sunLight
                  }`}
              >
                {context.theme === 'Day' ? '🌚' : '🌝'}
              </span>
            </Button>
          </div>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Navigation;
