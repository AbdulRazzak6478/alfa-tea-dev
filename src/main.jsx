import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './Context/Theme.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
// PiSignInFill
// PiSignOutFill
// VscSignIn
// BiLogIn
// FiLogIn
// TbLogin