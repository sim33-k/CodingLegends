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
      <div className='flex flex-wrap mb-1 gap-2'>
        {/* <Button variant="outline" className="mb-4">
          All Items
        </Button>
        <Button variant="outline" className="mb-4">
          Main Dishes
        </Button>
        <Button variant="outline" className="mb-4">
          Side Dishes
        </Button>
        <Button variant="outline" className="mb-4">
          Desserts
        </Button> */}
        {types.map(type => 
          <Button />
        )}
      </div>
      <div>
        <Input placeholder="Search items" />
      </div>
      
    </div>
  )
}

export default MenuPanel
