
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import Login from './pages/Login';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { useContext, useState } from 'react';
import { CashierContext } from './store/AppContext';
function App() {
  const navigate = useNavigate()
  const { validateLogin, isLogin, quantity } = useContext(CashierContext)
  console.log(isLogin,'inilogin');
  console.log(quantity, 'quantityyy');
  const [alerts, setAlerts] = useState(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [named, setNamed] = useState('')
  const [dated, setDated] = useState('')
  const handleLogin = () => {
    if (email === 'pulu@index.co' && pass === '12345') {
      validateLogin(true)
      navigate('/products')
      setAlerts('')
    } else if (email === '' || pass === '') {
      validateLogin(false)
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Email and password are required.
      </Alert>)
    } else if (email !== 'pulu@index.co') {
      validateLogin(false)
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Email invalid, try again.
      </Alert>)
    } else if (pass !== '12345') {
      validateLogin(false)
      setAlerts(<Alert status='error'>
        <AlertIcon />
        Password invalid, try again.
      </Alert>)
    }
  }
  const handleRegister = () => {
    if (email === '' || pass === '' || named === '' || dated === '') {
      validateLogin(false)
      setAlerts(<Alert status='error'>
        <AlertIcon />
        You should fill all column, try again.
      </Alert>)
    } else {
      validateLogin(true)
      setAlerts('')
      navigate('/products')
    }
  }
  return (
      <ChakraProvider theme={theme}>
        {alerts}
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" >
            <Routes>
              <Route exact path='/' element={
                <Login
                  handleLogin={handleLogin}
                  setEmail={setEmail}
                  email={email}
                  setPass={setPass}
                  pass={pass}
                />
              } />
              <Route path='/products' element={<Dashboard setAlerts={setAlerts} />} />
              <Route path='/register' element={
                <Register
                  handleRegister={handleRegister}
                  setDated={setDated}
                  dated={dated}
                  setNamed={setNamed}
                  named={named}
                  setEmail={setEmail}
                  email={email}
                  setPass={setPass}
                  pass={pass}
                />
              } />
            </Routes>

          </Grid>
        </Box>
      </ChakraProvider>
  );
}

export default App;
