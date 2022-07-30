import { AmountButton } from '../AmountButton'
import './index.css'

export function Ingrediente() {
  return (
    <section className="ingrediente">
      <h6 className="ingrediente__tittle">Queijo Cheddar</h6>
      <div className="ingrediente__amount">
        <AmountButton bigVariant={false} />
      </div>
      <span className="ingrediente__value"> + R$ 4,99</span>
    </section>
  )
}