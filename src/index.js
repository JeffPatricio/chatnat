import React, { Fragment, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './routes';
import SignUp from './pages/SignUp';
import Loading from './components/Loading';

const App = () => {

  const [perfil, setPerfil] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const perfil = await AsyncStorage.getItem('perfil');
        if (perfil) { await setPerfil(JSON.parse(perfil)) }
      } catch (error) {
        setPerfil('')
      } finally {
        setLoading(false)
      }
    })()
  }, [])


  return (
    <Fragment>
      <StatusBar barStyle='light-content' backgroundColor='#5e35b1' />
      {
        (loading) && (<Loading size='40' color='#FFF' />)
      }
      {
        (!loading && !perfil) && (<SignUp />)
      }
      {
        (!loading && perfil) && (<Routes perfil={perfil} />)
      }
    </Fragment>
  )
}

export default App;
