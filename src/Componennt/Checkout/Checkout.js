import CheckoutCard from "../../SharedComponent/checkoutCard";
import Header from "../../SharedComponent/Header"
import style from './Checkout.module.css';
import { useContext } from "react";
import mainContext from "../../Context/mainContext";

function Checkout() {

  const context = useContext(mainContext);
  const { cartList } = context;

  return (
    <>
      <Header />
      <p className={`${style.trendingItem}`}>Checkout</p>

      {
        cartList && cartList.length > 0 &&
        cartList.map((item, index) => {
          return <CheckoutCard key={index} item={item} />
        })
      }

    </>
  )
}

export default Checkout