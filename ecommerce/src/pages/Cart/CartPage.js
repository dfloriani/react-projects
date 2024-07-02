import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context/CartContext";
import useTitle from "../../hooks/useTitle";

export const CartPage = () => {
const { cartList } = useCart();
useTitle("Cart");

  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}