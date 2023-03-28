import style from './card.module.css';
import { useContext } from 'react';
import mainContext from '../Context/mainContext';

function Card(props) {

  const { item } = props;
  const { setCartList, cartList, favouriteList, setFavouriteList } = useContext(mainContext)

  const AddCart = (data) => {
    setCartList((prevState) => {
      return Array.from(new Set([...prevState, data]))
    })
  }

  const RemoveCart = (cartItem) => {
    setCartList((prevState) => {
      let data = prevState.filter((collected) => 
        collected.id !== cartItem.id
      )
      return data;
    })
  }

  const isAddInCart = () => {
    for(let i=0; i<cartList.length; i++){
      if(cartList[i].id === item.id){
        return true;
      }
    }
    return false;
  }

  const AddFavourite = (data) => {
    setFavouriteList((prevState) => {
      return Array.from(new Set([...prevState, data]))
    })
  }

  const RemoveFavourite = (cartItem) => {
    setFavouriteList((prevState) => {
      let data = prevState.filter((collected) => 
        collected.id !== cartItem.id
      )
      return data;
    })
  }

  const isAddFavourite = () => {
    for(let i=0; i<favouriteList.length; i++){
      if(favouriteList[i].id === item.id){
        return true;
      }
    }
    return false;
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <div className={`${style.cardContainer}`}>
        <div className={`${style.imageContainer}`}>
          <img src={item?.img} alt="" />
        </div>
        <div className={`${style.dataContainer}`}>
          <div className={`${style.upperContainer}`}>
            <h3>{item?.name}</h3>
            <p>
              {item?.description?.slice(0, 30)}
            </p>
            {
              item && item.available > 10 
              ?  <div style={{ backgroundColor: '#21c921' }}>Available</div>
              : <div>Only {item?.available} left</div>
            }
            
          </div>
          <div className={`${style.lowerContainer}`}>
              <span className={`${style.money}`}>{item?.price}</span>
              {
                isAddInCart() ?
                <span onClick={() => RemoveCart(item)} className="data">
                  <i className="fas fa-shopping-cart" style={{ color: 'green' }} ></i>
                </span>
                :
                <span onClick={() => AddCart(item)}>
                  <i className="fas fa-shopping-cart" ></i>
                </span>
              }
              {
                isAddFavourite() ?
                <span onClick={() => RemoveFavourite(item)}>
                  <i className="fas fa-heart" style={{ color: 'red' }}></i>
                </span>
                :
                <span onClick={() => AddFavourite(item)}>
                  <i className="fas fa-heart" ></i>
                </span>
              }
              {/* <span>
                <i className="fas fa-heart"></i>
              </span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card