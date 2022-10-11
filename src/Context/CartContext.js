import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  //const [cart, setCart] = useState([]);
  const [cart, setCart] = useLocalStorage('cart', []);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState({subtotal: 0, tax: 0, estimatedTotal: 0})


  const calcSubtotals = () => {
    if (cart.length === 0) return;
    const newCart = [...cart];
    const eachSubtotal = [];
    for (let item of newCart) {
      eachSubtotal.push(item.totalCost)
    }
    const newSubtotal = eachSubtotal.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const tax = newSubtotal * .07;
    const estimatedTotal = newSubtotal + tax;
    setSubtotal({subtotal: newSubtotal.toFixed(2), tax: tax.toFixed(2), estimatedTotal: estimatedTotal.toFixed(2)});
    }
  



  const addQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  }
  const removeQuantity = () => {
    const quantityValue = quantity;
    if (quantityValue <= 1) return;
    setQuantity((previousQuantity) => previousQuantity - 1);
  }
  const removeItem = (id) => {
    setCart(currentCart => {
        return currentCart.filter(item => item.id !== id)
    })
  }
  const addCartItem = (itemId) => {
    //checks to see if item in cart, if not add it
    const newCart = [...cart];
    const result = newCart.find((product) => product.id === itemId);
    if (result === undefined) {
      const newProductArray = products;
      const findInProducts = newProductArray.find((product) => product.id === itemId)
      const updatedValue = {
        item: findInProducts.title,
        quantity: quantity,
        img: findInProducts.image,
        price: findInProducts.price,
        totalCost: findInProducts.price * quantity,
        id: findInProducts.id
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
    //localStorage.setItem(`cart`, JSON.stringify(cart))
  }
  const handleUserQuantity = (event) => {
    if (Number(event.target.value < 1) || event.target.value.includes('-')) {
      setQuantity(1)
    } 
    else if (Number(event.target.value > 100)) {
      alert('You cannot purchase more than 100 of each item.')
      setQuantity(100)
    }
    
    else {
      setQuantity(Number(event.target.value))
    }
    
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
    <CartContext.Provider value={{ removeItem, setProducts, 
    setCart, 
    setQuantity, 
    addQuantity,
    handleUserQuantity,  
    removeQuantity,
    addCartItem,
    calcSubtotals,
    setSubtotal,
    getData,
    subtotal,
    quantity, 
    products, 
    cart}}>
        {children}
    </CartContext.Provider>
  )
}
