import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

export const Spinner = () => {
    const state = useSelector(state => state.authReducer) 
    const {spiner} = state.auth
    const style={
        display:'block'
    }
    spiner?style.display='block':style.display='none'
    return (
        <div style={style}>
            <CircularProgress color="secondary" />
        </div>
    );
}