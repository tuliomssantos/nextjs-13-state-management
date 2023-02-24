

import { useProductsStore } from "@/store/products"

import Image from "next/image"

/**
 * ProductInfo component
 * Uses the useProductsStore hook to get the product name
 * Demonstrates how to use the store on the server
 */
export default function ProductInfo() {
  return (
    <div>
        <Image src="http://localhost:8080/isolated-shot-ink-pen-with-white-background.jpeg" alt="pen" width={200} height={200} />
        <h1>{useProductsStore.getState().name}</h1>
    </div>
  )
}
