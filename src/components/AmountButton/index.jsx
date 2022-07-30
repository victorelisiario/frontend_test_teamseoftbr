import './index.css'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';

export function AmountButton({ bigVariant }) {
  const [amount, setAmount] = useState(0);

  return (
    <>
      {bigVariant ?
        < div className="amountButton amountButton--big" >
          {amount === 0 ?
            <button className="amountButton__button--disable amountButton__button"  > <AiOutlineMinus /></button >
            :
            <button className="amountButton__button" onClick={() => setAmount(amount - 1)} > <AiOutlineMinus /></button >
          }
          <span>{amount}</span>
          <button className="amountButton__button" onClick={() => setAmount(amount + 1)}><AiOutlinePlus /></button>
        </div >
        :
        < div className="amountButton " >
          {amount === 0 ?
            <button className="amountButton__button--disable amountButton__button" > <AiOutlineMinus /></button >
            :
            <button className="amountButton__button" onClick={() => setAmount(amount - 1)} > <AiOutlineMinus /></button >
          }
          <span>{amount}</span>
          <button className="amountButton__button" onClick={() => setAmount(amount + 1)}><AiOutlinePlus /></button>
        </div >}
    </>)

}