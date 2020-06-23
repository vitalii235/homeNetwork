import React from 'react'
import classes from './MainPage.module.scss';
import { FindComponent } from './findComponent/FindComponent';
import Menu from './Menu';
import Messages from './Messages';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Contacts } from './contacts/Contacts';
import { FriendPage } from './contacts/FriendPage';


export default function MainPage() {
    const state = useSelector(state => state.signInReducer)
    const styles = {
        router: {
            display: 'flex',
            justifyContent: 'center'
        },
        avatar: {
            display: 'flex',
            justifyContent: 'center'
        },
        image: {
            display: 'block',
            width: '200px',
            height: '200px',
            borderRadius: 20,
            border: '3px solid #fff'
        },
        nikName:{
            fontSize:30
        }
    }

    return (
        <div className={classes.MainPage}>
            <div>
                <Menu />
                <div style={styles.avatar}>
                    <img src={state.userData.avatar} alt='#' style={styles.image} />
                </div>
                <div style={styles.nikName}>
                    {state.userData.nikName}
                </div>
                <div style={styles.router}>
                    <Switch>
                        <Route path='/main/Find' component={FindComponent} />
                        <Route path='/main/Messages' component={Messages} />
                        <Route path='/main/Contacts' component={Contacts} />
                        <Route path='/main/Friend/:id' component={FriendPage}/>
                    </Switch>
                </div>

            </div>
        </div>

    )
}
