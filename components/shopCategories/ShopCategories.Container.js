import React from 'react'
import  ShopCategories  from './ShopCategories'
import { useSelector } from 'react-redux'

 const ShopCategoriesContainer = () => {
    const ShopCategoriesArr = useSelector(state => state.shopCategories)
    return (
        <ShopCategories categories={ShopCategoriesArr}/>
    )
}

export default ShopCategoriesContainer