import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
      return (
    <Route
      {...rest}
      render={(props) => {
          if(isLoggedIn) {
        return <Component {...props} />
    } else {
        return <Redirect to={
            {
                pathname: '/',
                state: { from: props.location }
            }
        } />
    }
      }}
    />
  );
};

export default ProtectedRoute;
