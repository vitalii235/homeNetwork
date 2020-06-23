import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menu: {
        color: '#fff'
    },
    listItem: {
        textDecoration: 'none',
        color: 'grey'
    }
});

export default function Menu() {
    const classes = useStyles();
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to={`/main`} className={classes.listItem}>
                    <ListItem button >
                        <ListItemText primary='Main' />
                    </ListItem>
                </Link>
                {['Find', 'Messages', 'Contacts'].map((text, idx) => (
                    <Link to={`/main/${text}`} className={classes.listItem} key={text} >
                        <ListItem button >
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
                <Link to='/auth' className={classes.listItem}>
                    <ListItem button key={Math.random()} onClick={() => localStorage.removeItem('id')}>
                        <ListItemText primary='LogOut' />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon>
                            {anchor}
                        </MenuIcon>
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}