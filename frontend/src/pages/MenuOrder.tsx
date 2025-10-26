import MenuPanel from '@/components/MenuPanel'
import OrderPanel from '@/components/OrderPanel'
import type { MenuItem, OrderItem } from '@/types/Common'
import { useState } from 'react'

const MenuOrder = () => {

  const [orderItem, setOrderItem] = useState<OrderItem[]>([]);

  const addToOrder = (item: MenuItem) => {

    // this is like our cart page, therefore whenever we add new items, if it already exists,
    // we need to increment it

    setOrderItem(prev => {
      const itemIndex = prev.findIndex(orderItem => orderItem.id === item.id);

      // it will be -1 if it doesnt exist
      if(itemIndex > -1) {
        const newItems = [...prev];
        newItems[itemIndex].quantity++;
        return newItems; 
      } else {
        // if it doesnt exist, then its a brand new entry

        return [...prev, {...item, quantity: 1}];
      }
    })
    
  }

  const updateQuantity = (id: number, value: number) => {
    if (value <= 0) {
      removeFromOrder(id);
    } else {
      setOrderItem(prev => (
        prev.map(item => {
          if(item.id === id) {
            return {...item, quantity: value}
          } else {
            return item;
          }
        })
      ))
    }
  }

  const removeFromOrder = (id: number) => {
    setOrderItem(prev => prev.filter(item => item.id !== id));
  };

  const clearOrder = () => {
    setOrderItem([]);
  };


  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-8rem)]'>
        <div className='lg:w-2/3 border border-border p-4 bg-background  rounded-lg'>
          <MenuPanel addToOrder={addToOrder}/>
        </div>
        <div className='lg:w-1/3 border border-border p-4 bg-background  rounded-lg'>
          <OrderPanel orderItem={orderItem} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} clearOrder={clearOrder}/>
        </div>
      </div>
    </div>
  )
}

export default MenuOrder
