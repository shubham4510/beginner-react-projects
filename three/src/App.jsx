import './styles/app.scss'
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx'
import {Toaster} from 'react-hot-toast'
import Cart from './components/Cart.jsx';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
   </Routes>
   <Toaster/>
    </>
   
  )
}

export default App