import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/types/product";

interface Props {
    products : Product[];
    addProduct: ()=> void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <List>
        {products.map((product : any) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl}></Avatar>
            </ListItemAvatar>
            <ListItemText>{product.name} - {product.price} €</ListItemText>
          </ListItem>
        ))}
      </List>
      <Button onClick={addProduct}> Add product</Button>
    </>
  );
}
