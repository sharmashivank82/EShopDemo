import { useState } from "react";
import mainContext from "./mainContext";

const MainState = (props) => {

    const [cartList, setCartList] = useState([])
    const [favouriteList, setFavouriteList] = useState([]);
    const [searchText, setSearchText] = useState('');

   return (
    <mainContext.Provider value={{
        
        cartList,
        setCartList,

        searchText,
        setSearchText,

        favouriteList, 
        setFavouriteList,

    }}>
        {props.children}
    </mainContext.Provider>
   )

}

export default MainState;