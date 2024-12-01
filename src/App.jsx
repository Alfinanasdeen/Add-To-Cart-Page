import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar.jsx';
import Cart from './Pages/Cart/cart.jsx';
import Shop from './Pages/Shop/shop.jsx';
import {ContextProvider} from './context/context.jsx'

function App(){
  return(
    <div>
      <ContextProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  )
}
export default App