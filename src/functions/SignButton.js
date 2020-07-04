import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button';

export const SignButton = ({children, registerPerson, buttonStatus}) => {

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="secondary"
                onClick={registerPerson}
                disabled={buttonStatus}
            >
                {children}
      </Button>
        </Fragment >
    )
}