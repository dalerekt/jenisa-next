"use client";
import { createContext, useContext, useState } from "react";
import { Cart } from "../lib/models";

const CartContext = createContext(null);

// Dua keranjang terpisah: biasa dan ekspor
export function CartProvider({ children }) {
  const [carts, setCarts] = useState({ biasa: new Cart("biasa"), ekspor: new Cart("ekspor") });

  const ubah = (mode, productId, delta) =>
    setCarts((prev) => ({ ...prev, [mode]: prev[mode].ubah(productId, delta) }));

  const totalItem = carts.biasa.totalItem() + carts.ekspor.totalItem();

  return (
    <CartContext.Provider value={{ carts, ubah, totalItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
