import CheckoutCard from "../../SharedComponent/checkoutCard";
import Header from "../../SharedComponent/Header"
import style from './Checkout.module.css';
import { useContext, useEffect, useState } from "react";
import mainContext from "../../Context/mainContext";

function Checkout() {

  const context = useContext(mainContext);
  const { cartList, ProductListWithQuantity } = context;
  const initialState = { subtotal: 0, discount: 0, freeItem: [], total: 0 }
  const [ billingData, setBillingData ] = useState(initialState)

  // console.log({ ProductListWithQuantity })

  function setData(freedata){
    // console.log({ freedata })
    setBillingData((prevData) => {
        const updatedFreeArray = prevData.freeItem.filter((item) => item.name !== freedata.name)
        return {...prevData, freeItem: [ ...updatedFreeArray, freedata ]}
    })
  }

  // console.log({ billingData })

  useEffect(() => {

    let subtotal = 0, discount = 0;
    setBillingData(initialState)
    
    if(ProductListWithQuantity.length > 0){
      for(let i=0; i<ProductListWithQuantity.length; i++){
        if(ProductListWithQuantity[i].name === 'Coca-Cola'){
            if(ProductListWithQuantity[i].quantity){
              const freebottles = Math.floor(ProductListWithQuantity[i].quantity/6);
              const freedata = { name: ProductListWithQuantity[i].name, quantity: freebottles }
              setData(freedata)
              // console.log({ freedata })
            }
        }

        if(ProductListWithQuantity[i].name === 'Croissants'){
          if(ProductListWithQuantity[i].quantity){
            const freeCoffes = Math.floor(ProductListWithQuantity[i].quantity/3);
            const freeCoffeedata = { name: 'Coffee', quantity: freeCoffes }
            setData(freeCoffeedata)
            // console.log({ freeCoffeedata })
          }
        }

        let price = ProductListWithQuantity[i].price;
        price = parseFloat(price.slice(1, price.length));
        subtotal = subtotal + price * ProductListWithQuantity[i].quantity;
  
      }
    }

    setBillingData((prevData) => ({ ...prevData, subtotal, discount, total: (subtotal+discount) }));
    // const totalPrice = subtotal + discount;
    // console.log({ totalPrice })
    // eslint-disable-next-line
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
          <span className={`${style.amount}`}>E {billingData.subtotal}</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Discount</span>
          <span className={`${style.amount}`}>E {billingData.discount}</span>
        </div>
        {
          billingData.freeItem.length > 0 &&
          billingData.freeItem.map((item, index) => {
            if(item?.quantity > 0)
              return (
                <div className={`${style.subtotal}`} key={index}>
                  <span>Free Item</span>
                  <span className={`${style.amount}`}>{item.quantity} {item.name}</span>
                </div>
              )
            else return <></>
          })
        }
        {/* <div className={`${style.subtotal}`}>
          <span>Free Item</span>
          <span className={`${style.amount}`}>1 CocaCola</span>
        </div>
        <div className={`${style.subtotal}`}>
          <span>Free Item</span>
          <span className={`${style.amount}`}>1 Coffee</span>
        </div> */}
        <div className={`${style.subtotal}`}>
          <span>Total</span>
          <span className={`${style.amount}`}>E {Math.round(billingData.total*100)/100}</span>
          <button>Checked</button>
        </div>
      </div>

    </>
  )
}

export default Checkout