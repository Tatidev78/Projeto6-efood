import { Routes, Route } from 'react-router-dom';
import Pizza from './Pizza';
import Home from '../components/Home';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path ="/pizza" element={<Pizza/>}/>
  </Routes>
);

export default Rotas;