import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content' backgroundColor='#6aa84f' />
      <SignUp />
    </Fragment>
  )
}

export default App;
