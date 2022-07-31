import './index.css'
import hamburguer from '../../assets/hamburguer.png'

export function Item({ products }) {
  const product = products.find(product => product.id === "1");

  if (product.vl_discount) {
    var brVl_discount = product.vl_discount.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }

  const brVl_price = product.vl_price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  return (
    <section className="item__data">
      {/* product.url_image 404 Not Found - link quebrado? */}
      <img src={hamburguer} alt={`Foto: ` + product.nm_product} />
      <h1 className="item__name">{product.nm_product}</h1>
      <p className="item__description">{product.description}</p>
      <div className="item__price">
        {brVl_discount ?
          // se existir preço com desconto, renderiza os 2, 
          // senao apenas vl_price 
          <>
            <span>{brVl_discount}</span>
            <span className="item__price--disable">
              {brVl_price}
            </span>
          </> : <>
            <span>{brVl_price}</span>
          </>
        }
      </div>
    </section>
  )
}