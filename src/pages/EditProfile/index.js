import React from 'react';
import Profile from '../../components/Profile';

const EditProfile = ({ navigation, perfil, setPerfil }) => {
  navigation.setOptions({ headerTitle: 'Editar Perfil' })
  return (
    <Profile updating={true} perfil={perfil} setPerfil={setPerfil} />
  )
}

export default EditProfile;
