import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalCss from './styles'
import Home from './components/Home'
import Pizza from './components/Pizza'
import {Footer} from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pizza" element={<Pizza />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="App">
        <Rotas />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App