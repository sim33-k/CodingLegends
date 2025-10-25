import React from 'react'
import MenuPanel from '@/components/MenuPanel'
import OrderPanel from '@/components/OrderPanel'

const MenuOrder = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-8rem)]'>
        <div className='lg:w-2/3 border border-border p-4 bg-background text-muted-foreground rounded-lg'>
          <MenuPanel/>
        </div>
        <div className='lg:w-1/3 border border-border p-4 bg-background text-muted-foreground rounded-lg'>
          <OrderPanel/>
        </div>
      </div>
    </div>
  )
}

export default MenuOrder
