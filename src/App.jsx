import { Header } from './components/Header'

import { useEffect, useState } from 'react';
import './App.css';
import { Item } from './components/Item';
import { Ingredientes } from './components/Ingredientes';



function App() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products')
      .then(response => response.json())
      .then(data => setSales(data))
  }, [])

  console.log(sales)

  return (
    <>
      <Header />
      <div className="container">

        <Item />
        <Ingredientes />



      </div>
    </>
  );
}

export default App;
