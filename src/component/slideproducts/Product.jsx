import  { useContext } from 'react'
import { IoMdStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import "./slideProduct.css";
import { Link } from 'react-router-dom';
import { CardContext } from '../context/CardContext';
import { FaCheck } from "react-icons/fa";

export default function Product({item}) {
    const{ cardItems , addToCard ,addToFavorites,favorites,removeFromFavorites} = useContext(CardContext)
    const isInCard = cardItems.some(i => i.id ===item.id);



    const isInFav = favorites.some(i => i.id ===item.id);
    const handleAddToFav =() =>{
        if(isInFav){
        removeFromFavorites(item.id)
        // window.alert(`${item.title}a Removed from favorite`)
        }else{
        addToFavorites(item)
        // window.alert(`${item.title}added to favorite`)
    }
    }

    return (
    <div className={`product ${isInCard ? 'in-card': ''}`}>
        <Link to={`/products/${item.id}`}>
        <span className="status-card"><FaCheck/></span>
        <div className="img-product">
            <img src={item.images[0]} alt="not found" />
            </div>        
            <p className='name-product'>{item.title}</p>
            <div className="stars">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <FaRegStarHalfStroke />
            </div>
            <p className="price"><span>$ {item.price} </span></p>
            <div className="icons">
                <span className='add-card-icon' onClick={()=>addToCard(item)}><FaCartArrowDown /></span>
                <span  className= {`${ isInFav ? "in-fav": ""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>
        </Link>
    </div>
    )
}

