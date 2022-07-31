import { useContext, useState } from 'react';
import { AmountButton } from '../AmountButton'
import { Ingrediente } from '../Ingrediente'
import './index.css'
import { IngredientContext } from '../../context/useIngredient'
import { cartContext } from '../../context/useCart'
import { NotificationModal } from '../NotificationModal';

export function Ingredientes({ products }) {
  const product = products.find(product => product.id === "1");
  const [notificationInfo, setNotificationInfo] = useState(null)

  //Item 2 quebrado? 'Precisa de talher' ficará estático
  //product.ingredients[0] para utilizar apenas os ingredientes adicionais
  const ingredientes = product.ingredients[0];

  let {
    setTalher,
    handleAddToCart, setItem
  } = useContext(cartContext);

  setItem(product.nm_product);

  function handleTalherChange(event) {
    setTalher(event.target.value)
  }

  async function handleAddItem() {

    const newItemAdded = await handleAddToCart()
    setNotificationInfo(newItemAdded)
    console.log(newItemAdded)

    setTimeout(function () {
      setNotificationInfo(null);
      window.location.href = "/";
    }, 1000);



  }

  return (<>
    <section className="ingredientes">
      <div className="ingredientes__header">
        <span className="ingredientes__tittle">Adicionar Ingredientes</span>
        <span className="ingredientes__maxItem">Até {ingredientes.max_itens} ingredientes</span>
      </div>

      <section className="ingredientes__options">
        {ingredientes.itens.map(item => {
          return (<Ingrediente data={item} key={item.id} />)
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
          <input type="radio" name="talher" value="não" onChange={handleTalherChange} />
        </div>
      </div>

      <div className="ingredientes__request">
        <div className="ingredientes__amountButton">
          <AmountButton bigVariant={true} />
        </div>
        <button className="ingredientes__resquestButton" onClick={handleAddItem}>Adicionar</button>
      </div>
    </section>

    {notificationInfo && <NotificationModal data={notificationInfo} />}

  </>
  )
}