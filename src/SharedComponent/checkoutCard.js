import { useState, useContext, useEffect } from 'react';
import style from './checkoutCard.module.css';
import mainContext from '../Context/mainContext';

function CheckoutCard(props) {

    const { item } = props;
    const [ quantitySelected, setQuantitySelected ] = useState({ quantity: 0, id: '', price: '', name: '' });
    const context = useContext(mainContext)

    const { setCartList, setProductListWithQuantity } = context

    const setData = () => {
        setProductListWithQuantity((prevQuantity) => prevQuantity.filter(word => word.id !== item.id))
        setProductListWithQuantity((prevQuantity) => [ ...prevQuantity, quantitySelected ])
    }

    const reduceQuantiy = () => {
        if(quantitySelected.quantity === 0) return;
        setQuantitySelected((prevstate) => ({ ...prevstate, quantity: prevstate.quantity - 1 }))
    }

    const addQuantity = () => {
        if(quantitySelected.quantity === item.available) return;
        setQuantitySelected((prevstate) => ({ ...prevstate, quantity: prevstate.quantity + 1 }))
    }

    const removeItem = (cartItem) => {
        setCartList((prevState) => {
            let data = prevState.filter((collected) => 
              collected.id !== cartItem.id
            )
            return data;
        })
    }

    useEffect(() => {
        setQuantitySelected((prevstate) => ({ ...prevstate, id: item.id, price: item.price, name: item.name }))
    }, [])

    useEffect(() => {
        if(quantitySelected.id !== '')
            setData()
    }, [quantitySelected])

  return (
    <>
        <div className={`${style.container}`}>
            <div className={`${style.imgdataContainer}`}>
                <div className={`${style.imageContainer}`}>
                    <img src={item.img} alt="" />
                </div>
                <div className={`${style.dataContainer}`}>
                    <h3>{item?.name}</h3>
                    <p>{item?.description.slice(0, 30)}</p>
                </div>
            </div>
            <div className={`${style.counterContainer}`}>
                <div className={`${style.calculateContainer}`}>
                    <div className={`${style.subtraction}`} onClick={reduceQuantiy}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </div>
                    <div>{quantitySelected.quantity}</div>
                    <div className={`${style.addition}`} onClick={addQuantity}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                </div>
                {
                    item?.available <= 10 &&
                    <span>Only {item.available} Left</span>
                }
            </div>
            <div className={`${style.priceContainer}`}>
                <p>{item.price}</p>
            </div>
            <div className={`${style.closeContainer}`} onClick={() => removeItem(item)}>
                <span>
                    <i className="fa-solid fa-x"></i>
                </span>
            </div>
        </div>
    </>
  )
}

export default CheckoutCard