import React from 'react'
import type { MenuItem } from '@/types/Common'

const ItemCardList = ({items} : {items: MenuItem[]}) => {
  return (
    <div>
        {items.map(item => (
            <div>
                {item.name}
            </div>
        ))}
      
    </div>
  )
}

export default ItemCardList
