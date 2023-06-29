import './App.css'
import { LogIn } from './pages/Log-in/Log-in.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Cart } from './pages/Cart/Cart.jsx';
import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}
export default App;