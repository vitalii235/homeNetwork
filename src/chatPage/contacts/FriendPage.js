import React from 'react'
import { useSelector } from 'react-redux';
import { SendMessageButton } from './SendMessageButton';
import { ModalComponent } from './ModalComponent';


export const FriendPage = ({ match }) => {
    const state = useSelector(state => state.signInReducer)
    const { userData } = state
    function CertainUser(apiPath, data) {
        this.apiPath = apiPath;
        this.data = data
    }
    let certainUser = null
    if (userData && match.params) {
        for (let i in userData.friends) {
            if (userData.friends[i].nikName === match.params.id) {
                let thisUser = new CertainUser(i, userData.friends[i])
                certainUser = thisUser
                console.log(certainUser);
            }
        }
    }
    const styles = {
        image: {
            display: 'block',
            width: '200px',
            height: '200px',
            borderRadius: 20,
            border: '3px solid #fff',
        },
        text: {
            fontSize: 30
        },
        main: {
            display: 'flex',
            justifyContent: 'center'
        }
    }

    return (
        <div >
            {certainUser !== null
                ? <div>
                    <hr />
                    <div style={styles.text}>
                        {certainUser.data.nikName}
                    </div>
                    <div style={styles.main}>
                        <img src={certainUser.data.avatar} style={styles.image} />
                    </div>
                    <SendMessageButton />
                    <ModalComponent />
                </div>
                : null}
        </div>
    )
}
