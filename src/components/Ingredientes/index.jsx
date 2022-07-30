import { AmountButton } from '../AmountButton'
import { Ingrediente } from '../Ingrediente'
import './index.css'

export function Ingredientes() {
  return (
    <section className="ingredientes">
      <div className="ingredientes__header">
        <span className="ingredientes__tittle">Adicionar Ingredientes</span>
        <span className="ingredientes__maxItem">Até 8 ingredientes</span>
      </div>

      <section className="ingredientes__options">
        <Ingrediente />
        <Ingrediente />
        <Ingrediente />
        <Ingrediente />
      </section>

      <div className="ingredientes__header">
        <span className="ingredientes__tittle">Precisa de Talher?</span>
      </div>
      <div className="ingredientes__boolean">
        <div className="ingredientes__option">
          <label >Sim</label>
          <input type="radio" name="talher" />
        </div>
        <div className="ingredientes__option">
          <label >Não</label>
          <input type="radio" name="talher" className="checkmark " />
        </div>
      </div>

      <div className="ingredientes__request">
        <div>
          <AmountButton bigVariant={true} />
        </div>
        <button className="ingredientes__resquestButton">Adicionar</button>
      </div>
    </section>
  )
}