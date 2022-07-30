import './index.css'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function AmountButton({ bigVariant }) {
  if (bigVariant) {
    return (
      < div className="amountButton amountButton--big" >
        < button className="amountButton__button--disable amountButton__button" > <AiOutlineMinus /></button >
        <span>2</span>
        <button className="amountButton__button"><AiOutlinePlus /></button>
      </div >
    )
  } else {
    return (
      < div className="amountButton " >
        < button className="amountButton__button--disable amountButton__button" > <AiOutlineMinus /></button >
        <span>2</span>
        <button className="amountButton__button"><AiOutlinePlus /></button>
      </div >
    )
  }
}