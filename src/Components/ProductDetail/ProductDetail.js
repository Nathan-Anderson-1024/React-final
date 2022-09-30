import { useParams } from "react-router";
import './ProductDetail.css'
import { useCart } from "../../Context/CartContext";


//each individual product
export default function ProductDetail(props) {
  //pulls id and gets index position of shop element
  const { id } = useParams();
  const indexLocation = id - 1;
  

  const { setCart, addQuantity, removeQuantity, quantity, products, cart } = useCart();
  const product = products;
  const handleUserQuantityEvent = (e) => {
    props.handleUserQuantity(e)
    
  }
  //adds items to cart, checks if cart already has item, if it does it updates the current total, if not it adds it
  const addCartItem = (itemId) => {
    //checks to see if item in cart, if not add it
    const newCart = [...cart];
    const result = newCart.find(({ id }) => id === itemId);
    if (result === undefined) {
      const updatedValue = {
        item: product[indexLocation].title,
        quantity: quantity,
        img: product[indexLocation].image,
        price: product[indexLocation].price,
        totalCost: product[indexLocation].price * quantity,
        id: product[indexLocation].id
      }
      setCart((prevState) => {
      return [...prevState, updatedValue]
      })
    }
    //if item already in cart add selected number to the already existing number 
    else {
      const newState = newCart.map(item => {
        if (item.id === itemId) {
          return {...item, quantity: item.quantity + quantity, totalCost: item.totalCost + quantity * item.price}
        }
        return item;
      })
      setCart(newState)
    }
    localStorage.setItem(`cart`, JSON.stringify(cart))
  }

  
  return (
    <>
      <div className="individual-product-container">
        <div className="img-left">
          <img alt="product description" src={product[indexLocation].image}></img>
        </div>
        <div className="product-info-right">
          <h2 className="category">{product[indexLocation].category}</h2>
          <h1 className="title">{product[indexLocation].title}</h1>
          <h3 className="price">${product[indexLocation].price.toFixed(2)}</h3>
          <div className="quantity">
            <h3 className="quantity-title">Quantity:</h3>
            <input className="quantity-input" value={quantity} onChange={handleUserQuantityEvent}></input>
            <div className="buttons">
              <button onClick={() => addQuantity()}>+</button>
              <button onClick={() => removeQuantity()}>-</button>
            </div>
            <button className="add-cart" onClick={() => addCartItem(product[indexLocation].id)}>Add to Cart</button>
          </div>
          <h3 className="description-title">Description:</h3>
          <h4 className="description">{product[indexLocation].description}</h4>
        </div>
      </div>
    </>
  );
}
