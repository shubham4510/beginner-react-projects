import { Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home.jsx"
import Footer from './components/Footer.jsx'

import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App