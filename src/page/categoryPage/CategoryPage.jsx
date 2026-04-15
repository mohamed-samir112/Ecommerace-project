import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Product from './../../component/slideproducts/Product'
import Product from '../../component/slideproducts/product'

export default function CategoryPage() {
    const {category} = useParams()
    const [categoryProducts,setcategoryProducts]=useState([])

    useEffect(()=> {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then((data)=> {
        setcategoryProducts(data.products)
    });
    },[category])
  return (
    <div className='category-products'>
        <div className="container">
            <div className="products">
                {categoryProducts.map((item,index)=>{
                    <Product item={item} key ={index}/>
                })}
            </div>
        </div>
    </div>
  )
}
