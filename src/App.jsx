import { Header } from './components/Header'

import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { Ingredientes } from './components/Ingredientes';
import { cartContext } from './context/useCart';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let {
    setCart, cart
  } = useContext(cartContext);

  useEffect(() => {
    fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(data => setLoading(false))
  }, [])

  if (loading) {
    return (<div>loading</div>)
  } else {
    return (
      <>
        <Header />
        <div className="container">
          <Item products={products} />
          <Ingredientes products={products} />
        </div>
      </>
    );
  }

}

export default App;
