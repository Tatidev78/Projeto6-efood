import{createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import GlobalCss from './styles';
import Hero from './components/Hero';
import ProductsList from './components/ProductsList';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Hero />
        <ProductsList title="Produtos" pratos={[]} />
      </>
    )
  }
])  

function App() {
  return (
    <>
      <GlobalCss />
      <div className="App">
        <RouterProvider router={rotas} />
      </div>
    </>
  );
}

export default App;