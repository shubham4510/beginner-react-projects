import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider ,theme} from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import ColorModeSwitcher from './ColorModeSwitcher.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
