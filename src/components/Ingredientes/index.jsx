import { useState } from 'react';
import { AmountButton } from '../AmountButton'
import { Ingrediente } from '../Ingrediente'
import './index.css'

export function Ingredientes({ products }) {
  const [talher, setTalher] = useState('')
  const product = products.find(product => product.id === "1");

  //Item 2 quebrado? 'Precisa de talher' ficará estático
  //product.ingredients[0] para utilizar apenas os ingredientes adicionais
  const ingredientes = product.ingredients[0];

  function handleTalherChange(event) {
    setTalher(event.target.value)
  }

  return (
    <section className="ingredientes">
      <div className="ingredientes__header">
        <span className="ingredientes__tittle">Adicionar Ingredientes</span>
        <span className="ingredientes__maxItem">Até {ingredientes.max_itens} ingredientes</span>
      </div>

      <section className="ingredientes__options">
        {ingredientes.itens.map(item => {
          return (<Ingrediente data={item} />)

        })}
      </section>

      <div className="ingredientes__header">
        <span className="ingredientes__tittle">Precisa de Talher?</span>
      </div>
      <div className="ingredientes__boolean">
        <div className="ingredientes__option">
          <label >Sim</label>
          <input type="radio" name="talher" value="sim" onChange={handleTalherChange} />
        </div>
        <div className="ingredientes__option">
          <label >Não</label>
          <input type="radio" name="talher" value="nao" onChange={handleTalherChange} />
        </div>
      </div>

      <div className="ingredientes__request">
        <div className="ingredientes__amountButton">
          <AmountButton bigVariant={true} />
        </div>
        <button className="ingredientes__resquestButton">Adicionar</button>
      </div>
    </section>
  )
}