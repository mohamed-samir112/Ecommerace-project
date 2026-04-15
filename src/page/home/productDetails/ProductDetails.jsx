import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IoMdStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

import "./ProductDetails.css";
import SlideProduct from "./../../../component/slideproducts/slideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
export default function ProductDetails({item}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setrelatedProducts] = useState([]);
  const [loadingrelatedProducts, setloadingrelatedProducts] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setrelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setloadingrelatedProducts(false));
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;
  if (!product) return <p>not found</p>;

  return (
    <div>
      <div className="item-details">
        <div className="container">
          <div className="imgs-item">
            <div className="big-img">
              <img id="bg-img" src={product.images[0]} alt={product.title} />
            </div>
            <div className="small-img">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.title}
                  onClick={() => (document.getElementById("bg-img").src = img)}
                />
              ))}
            </div>
          </div>
          <div className="details-item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <FaRegStarHalfStroke />
            </div>
            <p className="price">${product.price}</p>
            <h5>
              Availability : <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand : <span>{product.brand}</span>
            </h5>
            <p className="description"> {product.description} </p>
            <h5>
              {" "}
              <span>
                {" "}
                Hurry Up! Only <span> {product.stock} </span> products left in
                stock.{" "}
              </span>
            </h5>
            <button className="btn">
              Add to Card <IoMdCart />
            </button>
            <div className="icons">
              <span>
                <FaRegHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
      {loadingrelatedProducts ? (
        <p>loading....</p>
      ) : (
        <SlideProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
  );
}
