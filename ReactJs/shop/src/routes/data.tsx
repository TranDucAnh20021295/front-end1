import { Navigate } from 'react-router-dom';
import { HomePage } from "../pages/home";
import { ShopPage } from '../pages/shop';

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
    path: "*",
    element: <Navigate to="/home" />,
  },
];
