import React, { Fragment, useEffect, useState } from 'react';
import { StatusBar, YellowBox } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from './routes';
import SignUp from './pages/SignUp';
import Loading from './components/Loading';


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

const App = () => {

  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const perfil = await AsyncStorage.getItem('perfil');
        if (perfil) { await setPerfil(JSON.parse(perfil)) }
      } catch (error) {
        setPerfil(null)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle='light-content' backgroundColor='#5e35b1' />
      {
        (loading) && (<Loading size={50} color='#FFF' />)
      }
      {
        (!loading && !perfil) && (<SignUp setPerfil={setPerfil} />)
      }
      {
        (!loading && perfil) && (<Routes perfil={perfil} setPerfil={setPerfil} />)
      }
    </Fragment>
  )
}

export default App;
