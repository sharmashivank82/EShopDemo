// import { useNavigate } from "react-router-dom"
import Card from "../../SharedComponent/card";
import Header from "../../SharedComponent/Header";
import style from './Home.module.css';
import { useEffect, useContext, useState } from "react";
import mainContext from "../../Context/mainContext";
import FruitList from "../../API/FruitList";
import { useNavigate } from "react-router-dom";

function Home() {

  const context = useContext(mainContext);
  const { searchText, setProductList } = context;
  const navigate = useNavigate();

  const [ cardList, setCardList ] = useState([]);
  const [ selectedProduct, setSelectedProduct ] = useState('')

  const getFruitList = async() => {
    try{
      const res =  await FruitList.getFruitList();
      setCardList(res);
      setProductList(res);
    }catch(err){
      console.error(err);
    }
  }

  const handleSelect = (item) => {
    setSelectedProduct(item);
  }

  const handleNavigate = () => {
    navigate('/checkout')
  }

  useEffect(() => {
    getFruitList();
    handleSelect("all")
    // eslint-disable-next-line
  }, [])

  return (
    <>
        <Header />
        <div className={`${style.buttonContainer}`}>
            <button className={`${selectedProduct === "all" ? style.selected : ''}`} onClick={() => handleSelect("all")}>All Items</button>
            <button className={`${selectedProduct === "drinks" ? style.selected : ''}`} onClick={() => handleSelect("drinks")}>Drinks</button>
            <button className={`${selectedProduct === "fruit" ? style.selected : ''}`} onClick={() => handleSelect("fruit")}>Fruit</button>
            <button className={`${selectedProduct === "bakery" ? style.selected : ''}`} onClick={() => handleSelect("bakery")}>Bakery</button>
        </div>

        <p className={`${style.trendingItem}`}>Trending Items</p>

        <div className={`${style.cardItem}`}>
          {
            cardList && cardList.length > 0 &&
            cardList.map((item, index) => {
              if(searchText !== ''){
                if(item.name.toLowerCase().includes(searchText?.toLowerCase())){
                  return <Card item={item} key={index} />
                }
              }else{
                if(selectedProduct === 'all')
                  return <Card item={item} key={index} />
                else if(item.type === selectedProduct)
                  return <Card item={item} key={item.id} />
                else <></>
              }
            })
          }
        </div>

        <div className={`${style.buttonContainer}`} style={{ cursor: 'pointer' }} onClick={handleNavigate}>
          <button className={`${style.selected}`}>Proceed To Cart</button>
        </div>

    </>
  )
}

export default Home