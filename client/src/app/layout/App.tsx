import { CssBaseline, Container } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  
  

  return (
    <>
    <CssBaseline></CssBaseline>  {/* baseline for toolbar */}
      <Header></Header>
      <Container><Catalog/></Container>
      
    </>
  );
}

export default App;
