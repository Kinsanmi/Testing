import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Header } from '../Components/common/Header/Header';
import {Home} from '../Pages/Home';
import { Footer } from '../Components/common/Footer/Footer';
export const Routers = () => {
  return (
    <>
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}
