import style from './Header.module.css';
import { useContext } from 'react';
import mainContext from '../Context/mainContext';

function Header() {

  const { searchText, setSearchText, cartList, favouriteList } = useContext(mainContext);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div className={`${style.container}`}>
        <p className={`${style.heading}`}>GROCERIES</p>
          <div className={`${style.searchContainer}`}>
              <input type="text" placeholder="Search" value={searchText} onChange={handleChange} />
              <i className="fas fa-filter"></i>
          </div>
          <div className={`${style.heartContainer}`}>
              <i className="fa fa-heart"></i>
              <span>{favouriteList?.length}</span>
          </div>
          <div className={`${style.cartContainer}`}>
              {/* <img src={Cart} alt="" /> */}
              <i className="fas fa-shopping-cart"></i>
              <span>{cartList?.length}</span>
          </div>
    </div>
  )
}

export default Header