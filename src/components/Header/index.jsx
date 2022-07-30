import './index.css';
import deliverize from '../../assets/Deliverize.png'
import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function Header({ cart }) {
  return (
    <div className="header">
      <button className="header__arrowBack">
        <IoIosArrowBack />
      </button>
      <img src={deliverize} alt="Deliverize" href="#" />
      <div className="header__container">
        <div className="header__entregaContainer">
          <div className="header__entrega">
            <span className="header__titulo">Entrega:</span>
            <span className="header__endereco">R. Antonio Braune, 222</span>
          </div>
          <button>
            <IoIosArrowDown className="header__arrowDown" />
          </button>
        </div>
        <input className="header__bucarEstabelecimento" placeholder='Busque por estabelecimento ou produtos' />
        <button className="header__entrar">
          <FaRegUserCircle className="header__user" />
          <span>Entrar</span>
        </button>
        <button className="header__carrinho">
          <div className="header_carrinhoIcon">
            <AiOutlineShoppingCart className="header__cart" />
            <span className="header__notification">1</span>
          </div>
          <span>Carrinho</span>
        </button>
      </div>
    </div>

  )
}