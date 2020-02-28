import React from 'react';
import Profile from '../../components/Profile';

const SignUp = ({ setPerfil }) => {
  return (
    <Profile setPerfil={setPerfil} updating={false} />
  )
}

export default SignUp
