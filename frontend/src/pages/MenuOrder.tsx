import React from 'react'
import MenuPanel from '@/components/MenuPanel'
import OrderPanel from '@/components/OrderPanel'

const MenuOrder = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='lg:w-2/3 border border-red-500'>
          <MenuPanel/>
        </div>
        <div className='lg:w-1/3 border bg-neutral-900 border-red-500'>
          <OrderPanel/>
        </div>
      </div>
    </div>
  )
}

export default MenuOrder
