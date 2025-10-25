import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useEffect } from 'react'
import ItemCard from './ItemCard'

const MenuPanel = () => {

  const [currentCategory, setCurrentCategory] = useState('all');

  const types = [
    {id: 'all', name: 'All Items'},
    {id: 'main', name: 'Main Dishes'},
    {id: 'side', name: 'Side Dishes'},
    {id: 'dessert', name: 'Desserts'},
  ]

  const menuItems = [
  { id: 1, name: 'Rice', type: 'main', price: 'Rs. 100' },
  { id: 2, name: 'Rotty', type: 'main', price: 'Rs. 20' },
  { id: 3, name: 'Noodles', type: 'main', price: 'Rs. 150' },

  { id: 4, name: 'Wadai', type: 'sides', price: 'Rs. 45' },
  { id: 5, name: 'Dhal Curry', type: 'sides', price: 'Rs. 75' },
  { id: 6, name: 'Fish Curry', type: 'sides', price: 'Rs. 120' },

  { id: 7, name: 'Watalappam', type: 'desserts', price: 'Rs. 40' },
  { id: 8, name: 'Jelly', type: 'desserts', price: 'Rs. 20' },
  { id: 9, name: 'Pudding', type: 'desserts', price: 'Rs. 25' },
];

  return (
    <div>
        <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
            Menu Items
        </h2>
      <div className='flex flex-wrap mb-3 gap-2'>
        {types.map(type => 
          <Button
            key={type.id}
            variant={currentCategory === type.id ? "default" : "outline"}
            onClick={() => setCurrentCategory(type.id)}
          >
            {type.name}
          </Button>
        )}
      </div>
      <div>
        <Input placeholder="Search items" />
      </div>

      {/* Item grids, might include images later */}

      <div className="flex-1">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {menuItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default MenuPanel
