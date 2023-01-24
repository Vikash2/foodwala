import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <React.Fragment>
            <h1>Opps! </h1>
            <h2>Something went wrong.</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
        </React.Fragment>
    )
}

export default Error;