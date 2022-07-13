import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AppContext } from '../../contexts/AppContext';

const ProtectedRoute = (props) => {
    const context = React.useContext(AppContext);
    return (
        <Route {...props}>
            {() =>
                context.loggedIn ? <>{props.children}</> : <Redirect to="/" />
            }
        </Route>
    );
};

export default ProtectedRoute;
