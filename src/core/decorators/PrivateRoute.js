import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../context/auth";


export function PrivateRoute({ component: Component, ...rest }) {
    const {useTokens} = useAuth();
    return (
        <Route {...rest} render={(props) =>
            useTokens ? (
                <Component { ...props} />
            ) : (
                <Redirect to={{pathname: "/login", state: { referer: props.location }}} />
            )
        }/>
    );
}