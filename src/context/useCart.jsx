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

    //VERIFICA NUMERO DE ITENS A SER ADICIONADO
    let itensQuantity = ingredients[0].amount
    console.log(itensQuantity)

    //RETIRA OS ITENS COM QUANTIDADE === 0
    let newItem = [...ingredients]
    let newIngredientesToBeAdded = newItem.filter(item => item.amount !== 0)

    //RETIRA OBJETO COM QUANTIDADE DE ITEMS
    newIngredientesToBeAdded = newIngredientesToBeAdded.filter(item => item.name !== "Quantidade")

    //CRIA OBJETO PARA ADICIONAR NO CARRINHO
    const newItemToBeAdded = {
      name: item,
      talher: talher,
      ingredientes: [...newIngredientesToBeAdded]
    }

    //CRIA NOVO CARRINHO COM OS DADOS DO CARRINHO ATUAL
    var newCart = [...cart];

    // EMPURRA O ITEM PARA O NOVO CARRINHO itensQuantity DE VEZES
    for (itensQuantity; itensQuantity > 0; itensQuantity--) {
      newCart.push(newItemToBeAdded)
    }

    // SETA NOVO CARRINHO
    setCart(newCart)
    localStorage.setItem('deliverize', JSON.stringify(newCart))

    // RETORNA OS DADOS ADD PARA RENDERIZAR POPUP + REDIRECT
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