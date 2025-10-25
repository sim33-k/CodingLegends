import React from 'react'
import { Button } from './ui/button'


// must do a common import for these types later
type MenuType = {
  id: number;
  name: string;
}

type MenuItem = {
  id: number,
  name: string,
  price: string,
  typeId: number,
  type: MenuItem
}

const ItemCard = ({ item, onClick} : {item: MenuItem, onClick: any, type: MenuType}) => {
  return (
    <div onClick={onClick} key={item.id} className="border border-border p-4 bg-background  rounded-lg shadow-sm cursor-pointer
      transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
      <h3 className="font-medium text-lg mb-1">{item.name}</h3>
      <p className=" text-sm mb-3">{item.price}</p>
      <p className="text-xs text-muted-foreground">{item.type.name}</p>
      {/* <Button size="sm" className="w-full">
        Add to Order
      </Button> */}
    </div>
  )
}

export default ItemCard
