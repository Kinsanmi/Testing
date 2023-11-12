import {Home} from '../Pages/Home';
import {About} from '../Pages/About';
import {Cart} from '../Pages/Cart';
import {Shop} from '../Pages/Shop';
import {SignUp} from '../Pages/Signup';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Header } from '../Components/common/Header/Header';
import { Footer } from '../Components/common/Footer/Footer';
import { Cloth } from '../Service/cloth';


export const Routers = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Navigate to='/home' />} />
        <Route path='/home' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/shop' element={ <Shop to='/' />} />
        <Route path='/sign-up' element={ <SignUp />} />
        <Route path='/shop/02' element={ <Cloth />} />
        <Route path='/shop/03' element={ <Cloth />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}


