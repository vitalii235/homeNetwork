import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux';
import { modalIsClose } from '../../../store/actions/MainPageActions';
import { InputModal } from './InputModal';
import { InputModalPassword } from './InputModalPassword';
import { ModalButton } from './ModalButton';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export const ModalComponent = ({certainFriend}) => {
  const classes = useStyles();
  const { modalStatus } = useSelector(state => state.chatReducer)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(modalIsClose())
  };

  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalStatus}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalStatus}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Text your message</h2>
            <div className={classes.inputs}>
              <div>
                <InputModal />
              </div>
              <div>
                <InputModalPassword />
              </div>
              <div>
                <ModalButton 
                certainFriend={certainFriend}/>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}