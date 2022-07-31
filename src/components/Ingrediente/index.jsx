import { AmountButton } from '../AmountButton'
import './index.css'

export function Ingrediente(item) {

  const nome = item.data.nm_item
  const valor = item.data.vl_item.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  return (
    <section className="ingrediente">
      <h6 className="ingrediente__tittle">{nome}</h6>
      <div className="ingrediente__amount">
        <AmountButton bigVariant={false} name={nome} />
      </div>
      <span className="ingrediente__value"> + {valor}</span>
    </section>
  )
}