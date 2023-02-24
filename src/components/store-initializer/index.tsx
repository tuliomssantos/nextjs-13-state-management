"use client";

import { useRef } from "react";

import { useProductsStore } from "@/store/products";

export default function StoreInitializer({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  const initialize = useRef(false);

  if (!initialize.current) {
    useProductsStore.setState({ name, price });
    initialize.current = true;
  }

  return null;
}
