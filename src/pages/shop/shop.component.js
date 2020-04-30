import React, {useState} from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from '../../data/shop.data'



const ShopPage =  (props) => {

  const [shopData, setShopData] = useState(SHOP_DATA)




  return (

    <div className = 'shop-page'>

    {shopData.map(item => (
      <CollectionPreview
      key = {item.id}
      title = {item.title}
      items = {item.items} />

    ))}

    </div>

  )
}


export default ShopPage