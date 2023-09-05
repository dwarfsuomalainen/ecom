import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Contacts from "../../features/contact/Contact";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/About";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";

export const router = createBrowserRouter([
    {
       path: '/',
       element: <App/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'contacts', element: <Contacts/>},
            {path: 'about', element: <AboutPage/>},
            {path: 'catalog/:id', element: <ProductDetails/>},
            {path: 'catalog', element: <Catalog/>},
        ]
    }
])