import React from 'react'
import { useContext } from 'react'
import { CardContext } from './../../component/context/CardContext';
import { MdDeleteForever } from "react-icons/md";
import "./Card.css"
export default function card() {
    const {cardItems, increaseQuantity,decreaseQuantity,removeFromCard} = useContext(CardContext)
    const total = cardItems.reduce((acc,item)=>acc + item.price * item.quantity,0)
  return (
    <div className='checkout'>
        <div className="ordersummary">
        <h1>Order Summary</h1>
        <div className='items'>
            {cardItems.length ===0?  (
                <p>Card is empty</p>
            ):(
                cardItems.map((item ,index)=>(
                    <div className="item-card" key={index}>
                        <div className="image-name">
                        <div className='img-item'><img src={item.images[0]} alt="not found" /></div>
                        <div className="content">
                            <h4>{item.title}</h4>
                            <p className="price-item">${item.price}</p>
                            <div className="quantity-control">
                                <button  onClick={()=>decreaseQuantity(item.id)} >-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button onClick={()=>increaseQuantity(item.id)}>+</button>
                            </div>
                            </div>
                        </div>
                        <button className='delete-item'><MdDeleteForever  onClick={()=>removeFromCard(item.id)} /></button>
                    </div>
                ))
            )}
        </div>
        <div className="button-summary">
            <div className="shop-table">
                <p>Total:</p>
                <span className='total-checkout'>${total.toFixed(2)}</span>
                
           </div>
           <div className="button-div">
                    <button type='submit'>Place Order</button>
                </div>
        </div>
    </div>
    </div>
  )
}

