import React, { createContext, useState } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: `${process.env.SHOPIFY_SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN
})

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {
    console.log("added!")
  },
  client,
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({children}) => {
  return (
    <StoreContext.Provider value={defaultValues}>
      {children}
    </StoreContext.Provider>
  )
}