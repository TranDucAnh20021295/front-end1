import { Navigate } from 'react-router-dom';
import { HomePage } from "../pages/home";
import { ShopPage } from '../pages/shop';
import { ProductPage } from '../pages/singleProduct';
import { AccountPage } from '../pages/account';
import { ContactPage } from '../pages/contact';
import { CartPage } from '../pages/cart';

export const ROUTES = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "/account",
    element: <AccountPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/cart",
    element: <CartPage/>
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
