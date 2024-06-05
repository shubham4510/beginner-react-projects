import React from 'react'

const Cart = () => {
  return (
    <div className='cart'>
        <main>

        </main>
        <aside>
            <h2>Subtotal: ${2000}</h2>
            <h2>Shipping: ${200}</h2>
            <h2>Tax: ${20}</h2>
            <h2>Total: ${1220}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,qty,decrement,increment,deleteHandler,id}) => (
    <div className="cartItem">
        
    </div>
)

export default Cart;