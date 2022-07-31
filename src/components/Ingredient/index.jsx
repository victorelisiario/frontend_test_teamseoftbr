import './index.css'
import { AmountButton } from '../AmountButton'

export function Ingredient(item) {

  const name = item.data.nm_item
  const value = item.data.vl_item.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  return (
    <section className="ingredient">
      <h6 className="ingredient__tittle">{name}</h6>
      <div className="ingredient__amount">
        <AmountButton bigVariant={false} name={name} />
      </div>
      <span className="ingredient__value"> + {value}</span>
    </section>
  )
}