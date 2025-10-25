import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const MenuPanel = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
            Menu Items
        </h2>
      <div className='flex flex-wrap mb-1 gap-2'>
        <Button variant="outline" className="mb-4">
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
        </Button>
      </div>
      <div>
        <Input placeholder="Search items" />
      </div>
      
    </div>
  )
}

export default MenuPanel
