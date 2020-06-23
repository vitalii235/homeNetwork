import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ImageAvatar } from './ImageAvatar'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        color: 'grey',

    },
}));
const styles = {
    borderRadius: 30
}

export const ListOfContacts = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const state = useSelector(state => state.signInReducer)

    const { userData } = state
    return (
        <div>
            <List
                style={styles}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={styles}>
                        List of contacs
        </ListSubheader>
                }
                className={classes.root}
            >
                {userData.friends && userData.friends.slice(0, 2).map((i) => (
                    <Link to={`/main/Friend/${i.nikName}`} key={Math.random()}>
                        <ListItem button >
                            <ImageAvatar url={i.avatar} />
                            <ListItemText primary={i.nikName} />
                        </ListItem>
                    </Link>
                ))}
                {userData.friends && userData.friends.length > 2 &&
                    <div>
                        {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore onClick={handleClick} />}
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {userData.friends && userData.friends.slice(2).map((item) => (
                                    <Link to={`/main/Friend/${item.nikName}`} key={Math.random()}>
                                        <ListItem button>
                                            <ImageAvatar url={item.avatar} />
                                            <ListItemText primary={item.nikName} className={classes.text} />
                                        </ListItem>
                                    </Link>
                                ))}

                            </List>
                        </Collapse>
                    </div>}

            </List>
        </div>

    );
}