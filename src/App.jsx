import Topheader from './component/header/Topheader'
import Bottomheader from './component/header/Bottomheader'
import { Route,Routes } from 'react-router-dom'
import Home from './page/home/Home'
import ProductDetails from './page/home/productDetails/ProductDetails'
import Card from './page/card/Card';
import CategoryPage from './page/categoryPage/CategoryPage'
import SearchResults from './page/SearchResults'
import Mohamed from './component/mohamed/Mohamed'
export default function App() {
  return (
    <>
    <header>
      <Topheader/>
      <Bottomheader/>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/search' element={<SearchResults/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/category/:category' element={<CategoryPage/>}/>
    </Routes>
    
      <Mohamed/>
    </>
  )
}
