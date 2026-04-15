import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Product from '../component/slideproducts/Product'

export default function SearchResults() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const location = useLocation()
  const query = new URLSearchParams(location.search).get("query")

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        )
        const data = await res.json()
        setResults(data.products || [])
      } catch (error) {
        console.error("search Error:", error)
      } finally {
        setLoading(false)
      }
    }

    if (query) fetchResults()
  }, [query])

  return (
    <div className='category-products' >
      <div className="container">
        <div className="top-slide">
          <h2>Results for : {query}</h2>
        </div>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <div className="products" style={{display:"flex", flexDirection:"row", flexWrap:"wrap" ,gap:"20px" , justifyContent:"center", alignItems:"center"}}>
            {results.length > 0 ? (
              results.map((item, index) => (
                <Product item={item} key={index} />
              ))
            ) : (
              <h3>No results found</h3>
            )}
          </div>
        )}
      </div>
    </div>
  )
}