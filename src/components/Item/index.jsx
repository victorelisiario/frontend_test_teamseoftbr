import './index.css'
import hamburguer from '../../assets/hamburguer.png'

export function Item({ products }) {
  const product = products.find(product => product.id === "1");

  if (product.vl_discount) {
    product.vl_discount = product.vl_discount.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }

  product.vl_price = product.vl_price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });

  return (
    <section className="item__dados">
      {/* product.url_image 404 Not Found - link quebrado? */}
      <img src={hamburguer} alt="hamburguer" href="#" />
      <h1 className="item__name">{product.nm_product}</h1>
      <p className="item__description">{product.description}</p>
      <div className="item__price">
        {product.vl_discount ?
          // se existir preço com desconto, renderiza os 2, senao apenas vl_price 
          <>
            <span>
              {product.vl_discount}
            </span>
            <span className="item__price--disable">
              R$ {product.vl_price}
            </span>
          </> : <>
            <span>
              {product.vl_price}
            </span>
          </>
        }
      </div>
    </section>
  )
}