import './index.css'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useContext, useEffect, useState } from 'react';
import { IngredientContext } from '../../context/useIngredient';

export function AmountButton({ bigVariant, name }) {
  const [amount, setAmount] = useState(() => {
    if (name === "Quantidade") {
      return 1
    }
    return 0;
  });

  let {
    ingredients,
  } = useContext(IngredientContext);

  useEffect(() => {
    if (name) {
      const exists = ingredients.find(ingredient => ingredient.name === name)
      if (exists === undefined) {
        ingredients.push({ name, amount })
      } else {
        ingredients.map(ingredient => {
          if (ingredient.name === name) {
            ingredient.amount = amount
          }
        })
      }
    }
  }, [amount])

  return (
    <>
      {bigVariant ?
        < div className="amountButton amountButton--big" >
          {amount === 1 ?
            <button className="amountButton__button--disable amountButton__button"  >
              <AiOutlineMinus /></button >
            :
            <button className="amountButton__button"
              onClick={() => setAmount(amount - 1)}> <AiOutlineMinus />
            </button >
          }
          <span>{amount}</span>
          <button className="amountButton__button"
            onClick={() => setAmount(amount + 1)}>
            <AiOutlinePlus /></button>
        </div >
        :
        < div className="amountButton " >
          {amount === 0 ?
            <button className="amountButton__button--disable amountButton__button">
              <AiOutlineMinus /></button >
            :
            <button className="amountButton__button"
              onClick={() => setAmount(amount - 1)}>
              <AiOutlineMinus /></button >
          }
          <span>{amount}</span>
          <button className="amountButton__button"
            onClick={() => setAmount(amount + 1)}>
            <AiOutlinePlus /></button>
        </div >}
    </>)

}