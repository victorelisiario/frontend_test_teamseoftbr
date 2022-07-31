import { createContext, useContext, useState } from "react";
import { IngredientContext } from "./useIngredient";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [item, setItem] = useState([]);
  const [talher, setTalher] = useState('não');
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('deliverize');

    if (storagedCart !== null) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  let {
    ingredients,
  } = useContext(IngredientContext);

  function handleAddToCart() {

    //RETIRAR ITENS COM QUANTIDADE === 0
    let newItem = [...ingredients]
    const newIngredientesToBeAdded = newItem.filter(item => item.amount !== 0)

    //CRIAR OBJETO PARA ADICIONAR NO CARRINHO
    const newItemToBeAdded = {
      name: item,
      talher: talher,
      ingredientes: [...newIngredientesToBeAdded]
    }

    let newCart = [...cart];
    newCart.push(newItemToBeAdded)

    setCart(newCart)
    localStorage.setItem('deliverize', JSON.stringify(newCart))

    return newItemToBeAdded;
  }

  return (
    <cartContext.Provider
      value={{ cart, setCart, setItem, talher, setTalher, handleAddToCart }}
    >
      {children}
    </cartContext.Provider>
  );
}