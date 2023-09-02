import { Product } from "../../app/models/types/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}
