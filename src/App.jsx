import { Header } from './components/Header'
import { Item } from './components/Item';
import { Ingredients } from './components/Ingredients';
import { Loader } from './components/Loader';

import { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .then(() => setLoading(false))
  }, [])

  if (loading) {
    return (<Loader />)
  } else {
    return (
      <>
        <Header />
        <div className="container">
          <Item products={products} />
          <Ingredients products={products} />
        </div>
      </>
    );
  }
}

export default App;
