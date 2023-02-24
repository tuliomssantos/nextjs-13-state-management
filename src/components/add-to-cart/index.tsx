"use client";

import { useProductsStore } from "@/store/products";

/**
 * Before we can use the store, we need to initialize it on the client
 * If we use this component without StoreInitializer, we will get the initial state.
 * Check the StoreInitializer component to see how to initialize the store on the client
 */
export default function AddToCart() {
  const { name, price } = useProductsStore();

  const handleClick = () => {
    useProductsStore.setState((state) => ({
      ...state,
      cartTotal: state.cartTotal + price,
    }));
  };

  return (
    <div>
        <h2>{name}</h2>
        <p>Price ${price.toFixed(2)}</p>
        <button onClick={handleClick}>Add to cart</button>
    </div>
  );
}
