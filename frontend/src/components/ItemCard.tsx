import React from 'react'
import { Button } from './ui/button'

const ItemCard = ({ item }) => {
  return (
    <div key={item.id} className="border border-border p-4 bg-background text-muted-foreground rounded-lg">
      <h3 className="font-medium text-lg mb-1">{item.name}</h3>
      <p className="text-muted-foreground text-sm mb-3">{item.price}</p>
      <Button size="sm" className="w-full">
        Add to Order
      </Button>
    </div>
  )
}

export default ItemCard
