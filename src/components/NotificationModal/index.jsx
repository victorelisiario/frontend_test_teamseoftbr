import './index.css'
import arrow from '../../assets/arrow.svg'

export function NotificationModal({ data }) {
  return (
    <>
      <div className="modal">
        <img src={arrow} alt="Deliverize" href="#" />
        <h3 className="modal__tittle">Adicionado com Sucesso</h3>
        <div className="modal__container">
          <h4 className="modal__itemName">{data.name}</h4>
          <span >Ingredientes: </span>
          <ul>
            {
              data.ingredientes.map(data => <li key={data.name}>{data.amount + ` ` + data.name}</li>)
            }
          </ul>
        </div>
      </div>
    </>
  )
}