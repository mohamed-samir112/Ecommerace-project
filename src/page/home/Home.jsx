import React, { useEffect } from 'react'
import './Home.css';
import HeroSlider from '../../component/HeroSlider';
import { useState } from 'react';
import SlideProduct from './../../component/slideproducts/slideProduct'
import SlideProductLoading from '../../component/slideproducts/SlideProductLoading';
  const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories",

      

  ];
export default function Home() {

  const[products,setProducts]= useState({})

  const[loading,setLoading]= useState(true)
useEffect(()=>{
  const fetchProducts = async()=>{
    try{
      const results =await Promise.all(
        categories.map(async(category)=>{
          const res = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await res.json();
          return {[category]: data.products}
        })
      )
      const productsData = Object.assign({},...results);
      setProducts(productsData)
    }
    catch(error){
    console.error("Error not found " , error);
    }finally{
      setLoading(false)
    }
  }
  fetchProducts()
},[])
  return (
    <div>
        <HeroSlider/>


        {loading? (
              <SlideProductLoading />
        ):(
          categories.map((category)=>(
          <SlideProduct key={category}  data= {products[category]} title={category.replace("-","  ")}/>
        ))
        )}
        
    </div>
  )
}
