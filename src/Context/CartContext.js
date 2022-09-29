import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const getQuantity = (id) => {
    return cart.find(item => {
        if (item.id === id) return item.quantity;
        return 0
    })
  }

  const increaseQuantity = (id) => {
    setCart(currentCart => {
       if (currentCart.find(item => item.id === id) == null) {
        return [...currentCart, {id, quantity: 1}]
       } else {
        return currentCart.map(item => {
            if(item.id === id) {
                return {...item, quantity: item.quantity + 1}
            } else {
                return item
            }
        })
       }
    })
  }

  const decreaseQuantity = (id) => {
    setCart(currentCart => {
       if (currentCart.find(item => item.id === id)?.quantity === 1) {
        return currentCart.filter(item => item.id !== id)
       } else {
        return currentCart.map(item => {
            if(item.id === id) {
                return {...item, quantity: item.quantity - 1}
            } else {
                return item
            }
        })
       }
    })
  }

  const removeItem = (id) => {
    setCart(currentCart => {
        return currentCart.filter(item => item.id !== id)
    })
  }





  const addQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }


  const removeQuantity = () => {
    const quantityValue = quantity;
    if (quantityValue <= 1) return;
    setQuantity((previousQuantity) => previousQuantity - 1);
  }

  const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const json = await response.json()
    return json
  }
  //gets data from api
  useEffect(() => {
    getData().then(
      result => {
        return setProducts(result);
    }
    )
  }, [])

  

  

  return (
    <CartContext.Provider value={{ getQuantity, 
    increaseQuantity, 
    decreaseQuantity, 
    removeItem, 
    setProducts, 
    setCart, 
    setQuantity, 
    addQuantity,  
    removeQuantity,
    quantity, 
    products, 
    cart }}>
        {children}
    </CartContext.Provider>
  )
}
