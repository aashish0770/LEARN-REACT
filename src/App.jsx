import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profiles' element={<Profiles/>}/>
    <Route path='/sing-in' element={<SingIn/>}/>
    <Route path='/sing-up' element={<SingUp/>}/>
  </Routes>
  </BrowserRouter>;
}
