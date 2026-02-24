import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Rotas;