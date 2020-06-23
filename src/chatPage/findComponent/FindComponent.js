import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { ListOfFindUsers } from './ListOfFindUsers';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredNiknames, searchValue } from '../../store/actions/MainPageActions';


const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const handleChange = (state, value, dispatch) => {
    const arrOfUsersNikNames=[]
    for(let i in state){
        arrOfUsersNikNames.push(state[i].nikName);
    }
    const newArrOfUsersNiknames=arrOfUsersNikNames.filter(item=>item.toLowerCase().includes(value.toLowerCase()))
    dispatch(getFilteredNiknames(newArrOfUsersNiknames))
}
export const FindComponent = () => {
    const classes = useStyles();
    const state = useSelector(state => state.chatReducer)
    const {allUsers, findFieldValue} = state
    const dispatch = useDispatch()
    return (
        <div>
            <Toolbar>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        onChange={(e)=>{
                            const value = e.target.value
                            dispatch(searchValue(value))
                            handleChange(allUsers, value, dispatch)
                        }}
                        value={findFieldValue}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
            <ListOfFindUsers/>
        </div>
    );
}