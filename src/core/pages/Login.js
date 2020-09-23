import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {Card, Form, Input, Button, Error} from '../components/authform/AuthForm';
import {useAuth} from '../../context/auth';

export function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {setAuthTokens} = useAuth();
    console.log('referer', props.location);
    const referer = props.location.state.referer || '/';

    function postLogin(){
        axios.post('https://www.somePlace.com/auth/login', {
            userName,
            password
        }).then((result) => {
            if(result.status === 200){
                setAuthTokens(result.data);
                setLoggedIn(true);
            }else{
                setIsError(true);
            }
        }).catch((event) => {
            setIsError(true);
        })
    }

    if(isLoggedIn){
        return <Redirect to={referer} />
    }

    return (
        <Card>
            <Form>
                <Input
                    type="email"
                    placeholder="email"
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            {isError &&<Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
}

