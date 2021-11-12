import React from 'react';
import Register from './Register';
import Login from './Login';

const Switcher = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <div>
      {isLogin ? (
        <Login setIsLogin={() => setIsLogin(false)} />
      ) : (
        <Register setIsLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Switcher;
