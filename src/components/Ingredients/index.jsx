import './index.css'

import { AmountButton } from '../AmountButton'
import { Ingredient } from '../Ingredient'
import { NotificationModal } from '../NotificationModal';

import { cartContext } from '../../context/useCart'
import { useContext, useEffect, useState } from 'react';

export function Ingredients({ products }) {
  const product = products.find(product => product.id === "1");
  const [notificationInfo, setNotificationInfo] = useState(null);

  //Item 2 quebrado? 'Precisa de talher' ficará estático
  //product.ingredients[0] para utilizar apenas os ingredients adicionais
  const ingredients = product.ingredients[0];

  const {
    setTalher,
    handleAddToCart, setItem
  } = useContext(cartContext);

  useEffect(() => {
    setItem(product.nm_product);
  }, [])

  function handleTalherChange(event) {
    setTalher(event.target.value)
  }

  async function handleAddItem() {
    const newItemAdded = await handleAddToCart()
    setNotificationInfo(newItemAdded)

    setTimeout(function () {
      setNotificationInfo(null);
      window.location.href = "/";
    }, 1000); // 1 second
  }

  return (
    <>
      <section className="ingredients">
        <div className="ingredients__header">
          <span className="ingredients__tittle">Adicionar Ingredientes</span>
          <span className="ingredients__maxItem">Até {ingredients.max_itens} ingredientes</span>
        </div>

        <section className="ingredients__options">
          {ingredients.itens.map(item => {
            return (<Ingredient data={item} key={item.id} />)
          })}
        </section>

        <div className="ingredients__header">
          <span className="ingredients__tittle">Precisa de Talher?</span>
        </div>
        <div className="ingredients__boolean">
          <div className="ingredients__option">
            <label >Sim</label>
            <input type="radio" name="talher" value="sim" onChange={handleTalherChange} />
          </div>
          <div className="ingredients__option">
            <label >Não</label>
            <input type="radio" name="talher" value="não" onChange={handleTalherChange} />
          </div>
        </div>

        <div className="ingredients__request">
          <div className="ingredients__amountButton">
            <AmountButton bigVariant={true} name="Quantidade" />
          </div>
          <button className="ingredients__resquestButton" onClick={handleAddItem}>Adicionar</button>
        </div>
      </section>

      {notificationInfo && <NotificationModal data={notificationInfo} />}
    </>
  )
}