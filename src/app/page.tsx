import { useProductsStore } from "@/store/products";

import styles from "./page.module.css";

import Image from 'next/image';
import ProductInfo from "@/components/product-info";
import Cart from "@/components/cart";
import AddToCart from "@/components/add-to-cart";
import StoreInitializer from "@/components/store-initializer";

export const metadata = {
  title: "Next State Management",
  description: "Demonstrates how to use Next.js with state management",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

type Product = {
  description: string
  name: string
  price: number
}

export default async function Home() {
  const dataResponse = await fetch('http://localhost:8080/products.json')
  
  const data = (await dataResponse.json()) as Product
  
  //Store initialization on the server
  useProductsStore.setState({
    name: data.name,
    price: data.price,
  })
  
  
  return (
    <>
      {/* Store initialization on the client */}
      <StoreInitializer name={data.name} price={data.price} />
      <main className={styles.main}>
        <ProductInfo />
        <Cart />
        <AddToCart />
      </main>
      <footer>
        <a href="https://www.freepik.com/free-photo/isolated-shot-ink-pen-with-white-background_10583087.htm#query=pen&position=12&from_view=search&track=robertav1">
          Image by wirestock
        </a>
        on Freepik
      </footer>
    </>
  );
}
