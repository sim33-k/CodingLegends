import React from 'react'
import { Input } from './ui/input'

const MenuPanel = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
            Menu Items
        </h2>
      <Input placeholder="search items" />
    </div>
  )
}

export default MenuPanel
