import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export const Success = ({ children, style, icon }) => {
    console.log(typeof(icon));
    
    return (
        <div style={style}>
            <Alert icon={icon} severity="success">
                {children}
            </Alert>
        </div>
    );
}

Success.propsType = {
    children: PropTypes.string,
    style: PropTypes.object,
    icon:PropTypes.object
}

Success.defaultProps = {
    children: 'Your registration has been success',
    style: {
        display: 'none',
        transition: 'all ease-in-out .5'
    }
}