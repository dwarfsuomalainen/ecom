import { useEffect, useState } from "react";
import { Product } from "../models/types/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch ('http://localhost:5000/api/products')
    .then(resp => resp.json())
    .then(data => setProducts(data))
  },[])

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length +101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100.0,
        brand: 'brand',
        description: 'description',
        pictureUrl: 'http://picsum.photos/3000',

      },
    ]);
  }

  return (
    <div className="app">
      <Typography variant="h1">Ecom store</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;
