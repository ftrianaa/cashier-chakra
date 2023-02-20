import { useState } from 'react';
import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './pages/Login';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
function App() {
  const navigate = useNavigate()
  const [alerts, setAlerts] = useState(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const handleLogin = () => {
    if (email === 'pulu@index.co' && pass === '12345') {
      navigate('/')
    } else if (email === '' || pass === '') {
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Email and password are required.
      </Alert>)
    } else if (email !== 'pulu@index.co') {
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Email invalid, try again.
      </Alert>)
    } else if (pass !== '12345') {
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Password invalid, try again.
      </Alert>)
    }
  }
  return (
    <ChakraProvider theme={theme}>
      {alerts}
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>

            <Routes>
              <Route exact path='/login' element={
              <Login
                handleLogin={handleLogin}
                setEmail={setEmail}
                email={email}
                setPass={setPass}
                pass={pass}
              />
              } />
              <Route path='/' element={<Dashboard setAlerts={setAlerts}/>}/>
            </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
