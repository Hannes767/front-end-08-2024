import React, { useState } from 'react'
import productsFromCart from "../../data/cart.json"


function Cart() {
  const [cart, setCart] = useState (productsFromCart.slice());

  const add = (newItem) => {
    productsFromCart.push(newItem);
    setCart(productsFromCart.slice());
  }

  const deleteOneItem = (index) => {
    productsFromCart.splice(index,1);
    setCart(productsFromCart.slice());
  }

  const emptyTheCart = () => {
    productsFromCart.splice(0);
    setCart(productsFromCart.slice());
  }

  const totalPrice = () => {
    let sum = 0;
    cart.forEach(product => sum = sum + product.price);
    return sum;
  }


  return (
    <div>
      <br />
      {cart.length > 0 && <div>Hind kokku: {totalPrice()} eurot</div>}
      {cart.length > 0 && <div>Ostukorvis on {cart.length} {cart.length === 1 ? "toode" : "toodet"}</div>}
      {cart.length === 0 && <div>Ostukorv on tühi</div>}
      {cart.length > 0 && <button onClick={emptyTheCart}>Tühjenda ostukorv</button>}
      <br /><br />
      {cart.map((product, index )=>
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price} eurot</div>
                <button onClick={() => add(product)}>Lisa toode</button>
                <button onClick={() => deleteOneItem(index)}>x</button><br /><br />
            </div>
        )}


    </div>

  )
}

export default Cart