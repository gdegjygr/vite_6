import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productAction } from '../store/productSlice'
import '../index.css'


const MarketPage = () => {
    const marketProducts = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    
    const handleClick = (selectProduct) => {
        dispatch(productAction.addToBasket(selectProduct))
    }

  return (
    <div className='product'>
        {marketProducts.map((item) => (
            <div key={item._id} className='product--info'>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <img src={item.picture} alt="picture" className='product--image'/>
            <span>{item.description}</span>
            <p>{item.category}</p>
            <button onClick={() => handleClick(item)} className='buy--button'>BUY</button>
        </div>
        ))}
    </div>
  )
}

export default MarketPage