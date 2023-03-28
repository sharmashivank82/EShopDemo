import CheckoutCard from "../../SharedComponent/checkoutCard";
import Header from "../../SharedComponent/Header"
import style from './Checkout.module.css';
import { useContext, useEffect, useState } from "react";
import mainContext from "../../Context/mainContext";

function Checkout() {

  const context = useContext(mainContext);
  const { cartList, ProductListWithQuantity } = context;
  const [ billingData, setBillingData ] = useState({ subtotal: 0, discount: 0, freeItem: [], total: 0 })

  // console.log({ ProductListWithQuantity })

  useEffect(() => {
    
    if(ProductListWithQuantity.length > 0){

    }

  }, [ProductListWithQuantity])

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

      <div className={`${style.subtotalContainer}`}>
        <div className={`${style.subtotal}`}>
          <span>Subtotal</span>
          <span className={`${style.amount}`}>E 4.70</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Discount</span>
          <span className={`${style.amount}`}>E 4.70</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Free Item</span>
          <span className={`${style.amount}`}>1 CocaCola</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Free Item</span>
          <span className={`${style.amount}`}>1 Coffee</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Total</span>
          <span className={`${style.amount}`}>E 4.70</span>
          <button>Checked</button>
        </div>
      </div>

    </>
  )
}

export default Checkout