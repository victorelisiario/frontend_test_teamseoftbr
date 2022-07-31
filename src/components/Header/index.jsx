import './styles.css';
import deliverize from '../../assets/Deliverize.svg'

import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useContext } from 'react';
import { cartContext } from '../../context/useCart';

export function Header() {
  const {
    cart, setCart
  } = useContext(cartContext);

  if (cart.length > 0) {
    var renderNotification = true
  }

  function handleShowCart() {
    console.log(cart)
    console.log(JSON.stringify({
      orderID: '9SD0JIGVBJBIOFDJBBD9A',
      timestamp: new Date(),
      data: cart
    }))
    localStorage.removeItem('deliverize');
    setCart([])
    alert('Veja o conteúdo do carrinho no console :)')
  }

  return (
    <div className="header">
      <button className="header__arrowBack">
        <IoIosArrowBack />
      </button>
      <a href="/"><img src={deliverize} alt="Deliverize" /></a>
      <div className="header__container">
        <div className="header__addressContainer">
          <div className="header__delivery">
            <span className="header__tittle">Entrega:</span>
            <span className="header__address">R. Antonio Braune, 222</span>
          </div>
          <button>
            <IoIosArrowDown className="header__arrowDown" />
          </button>
        </div>
        <input className="header__searchBar" placeholder='Busque por estabelecimento ou produtos' />
        <button className="header__login">
          <FaRegUserCircle className="header__user" />
          <span>Entrar</span>
        </button>
        <button className="header__cart" onClick={handleShowCart}>
          <div className="header_cartIconContainer">
            <AiOutlineShoppingCart className="header__cartIcon" />
            {
              renderNotification &&
              <span className="header__notification">{cart.length}</span>
            }
          </div>
          <span>Carrinho</span>
        </button>
      </div>
    </div>

  )
}