import React from 'react'
import type { MenuItem } from '@/types/Common'
import ItemCard from './ItemCard'

const ItemCardList = ({items} : {items: MenuItem[]}) => {
  return (
    <div className='flex-1 overflow-y-auto space-y-3 mb-4'>
        {items.map(item => (
            <div>
                <ItemCard item={item}/>
            </div>
        ))}
      
    </div>
  )
}

export default ItemCardList
