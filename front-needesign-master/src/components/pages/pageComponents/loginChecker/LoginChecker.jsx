import { props } from 'bluebird';
import React from 'react';
import {Redirect} from 'react-router-dom';

function LoginChecker(props) {

    let user = sessionStorage.getItem('user');

    return (
        <div>
            {(!user.length > 0) ? <Redirect to="/login" /> : ""}
        </div>
    )

}

export default LoginChecker;