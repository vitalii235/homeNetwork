import React from 'react';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';

export const RegistredSuccess = () => {

    return (
        <div >
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                This is a success alert — check it out!
      </Alert>

        </div>
    );
}