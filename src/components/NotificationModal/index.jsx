import './styles.css'
import arrow from '../../assets/arrow.svg'

export function NotificationModal({ data }) {

  let shouldRenderIngredients
  data.ingredientes.length > 0 ?
    shouldRenderIngredients = true :
    shouldRenderIngredients = false;

  console.log(shouldRenderIngredients)

  return (
    <>
      <div className="modal">
        <img src={arrow} alt="Deliverize" href="#" />
        <h3 className="modal__tittle">Adicionado com Sucesso</h3>
        <div className="modal__container">
          <h4 className="modal__itemName">{data.name}</h4>
          {shouldRenderIngredients &&
            <>
              <span >Ingredientes: </span>
              <ul>
                {
                  data.ingredientes.map(data => <li key={data.name}>{data.amount + ` ` + data.name}</li>)
                }
              </ul>
            </>
          }

        </div>
      </div>
    </>
  )
}