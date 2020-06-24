import React, { Fragment } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useSelector, useDispatch } from 'react-redux';
import { modalTextArea } from '../../../store/actions/modalActions';

export const InputModal = () => {
    const { textAreaValue } = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()
    console.log(textAreaValue);
    
    const valueFromInput = (e) => {
        const value = e.target.value
        dispatch(modalTextArea(value))
    }
    return (
        <Fragment>
            <TextareaAutosize
                onChange={valueFromInput}
                value={textAreaValue}
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Text your message"
            />;
        </Fragment>
    )
}
