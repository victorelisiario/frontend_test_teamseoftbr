import './index.css'
import hamburguer from '../../assets/hamburguer.png'

export function Item() {
  return (
    <section className="item__dados">
      <img src={hamburguer} alt="hamburguer" href="#" />
      <h1 className="item__name">Oferta Picanha Cheddar Bacon</h1>
      <p className="item__description">Hambúrguer de picanha, molho de picanha, cebola crispy,
        bacon, queijo cheddar, molho cheddar e pão mix de gergelim
      </p>
      <div className="item__price">
        <span>
          R$ 31,99
        </span>
        <span className="item__price--disable">
          R$ 34,95
        </span>
      </div>
    </section>
  )
}