import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../index.css'
import { productAction } from '../store/productSlice'


const Basket = () => {
    const basketProducts = useSelector(state => state.product.addedProduct)
    const counter = useSelector(state => state.product.value)
    const dispatch = useDispatch()

    const handleIncrease = (plus) => {
      dispatch(productAction.increaseCounter(plus))
    }

    const handleDecrease = (minus) => {
      dispatch(productAction.decreaseCounter(minus))
    }


    const deleteProduct = (del) => {
    // передача арг. "del" нужна, т.к. "del" яв-ся объектом "addedProduct" со свойством "index"
      dispatch(productAction.deleteInBasket(del))
    }

  return (
    <div className='product'>
        {basketProducts.map((thisItem) => (
            <div key={thisItem._id} className='product--info'>
                <h2>{thisItem.name}</h2>
                <h3>{thisItem.price}</h3>
                <img src={thisItem.picture} alt="picture" className='product--image'/>
                <span>{thisItem.description}</span>
                <p>{thisItem.category}</p>
                <div className='product--counter'>
                  <button onClick={() => handleIncrease()}>+</button>
                  {counter}
                  <button onClick={() => handleDecrease()}>-</button>
                </div>
                <button onClick={() => deleteProduct(thisItem)}>DELETE</button>
            </div>
        ))}
    </div>
  )
}

export default Basket