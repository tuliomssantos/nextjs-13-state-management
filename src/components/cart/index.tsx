"use client";

import { useProductsStore } from "@/store/products";

/**
 * Before we can use the store, we need to initialize it on the client
 * If we use this component without StoreInitializer, we will get the initial state.
 * Check the StoreInitializer component to see how to initialize the store on the client
 */
export default function Cart() {
  const cartTotal = useProductsStore((state) => state.cartTotal);
  
  return (
    <div>
      <h2>Cart</h2>
      <p>{cartTotal}</p>
    </div>
  );
}
