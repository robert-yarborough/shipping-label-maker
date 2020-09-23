import React from 'react';
import {Button} from '../components/authform/AuthForm';
import {useAuth} from '../../context/auth';

export function Admin(props){
    const {setAuthTokens} = useAuth();

    function logOut(){
        setAuthTokens();
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <Button onClick={logOut}>Log Out</Button>
        </div>)
}