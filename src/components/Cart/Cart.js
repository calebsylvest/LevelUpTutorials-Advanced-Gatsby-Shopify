import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { isCartOpen, checkout } = useContext(StoreContext)

  console.log(checkout.lineItems)
    
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: 'var(--elevation-4)',
      }}
    >
      <h3>Cart</h3>

      {checkout.lineItems.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.quantity}</p>
          <p>${item.variant.price}</p>
          <hr />
        </div>
      ))}
      
    </div>
  )
}

export default Cart