import Home from "@/pages/home/Home";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import NotFound from "@/pages/NotFound";

export const pagesRoutes = [
  { path: "/", element: <Home /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/order-success", element: <OrderSuccess /> },
  { path: "*", element: <NotFound /> },
];
