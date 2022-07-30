import { Header } from './components/Header'

import { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { Ingredientes } from './components/Ingredientes';





function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(data => setLoading(false))
  }, [])

  console.log(products)

  if (loading) {
    return (<div>loading</div>)
  } else {
    return (
      <>
        {console.log('oi')}
        <Header cart={cart} />
        <div className="container">
          <Item products={products} />
          <Ingredientes products={products} />
        </div>
      </>
    );
  }

}

export default App;
