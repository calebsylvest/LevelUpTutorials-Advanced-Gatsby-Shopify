import React, { createContext, useState } from 'react'

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {
    console.log("added!")
  }
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({children}) => {
  return (
    <StoreContext.Provider value={defaultValues}>
      {children}
    </StoreContext.Provider>
  )
}