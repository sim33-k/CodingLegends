import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useEffect } from 'react'

const MenuPanel = () => {

  const [currentCategory, setCurrentCategory] = useState('all');

  const types = [
    {id: 'all', name: 'All Items'},
    {id: 'main', name: 'Main Dishes'},
    {id: 'side', name: 'Side Dishes'},
    {id: 'dessert', name: 'Desserts'},
  ]


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
      
    </div>
  )
}

export default MenuPanel
