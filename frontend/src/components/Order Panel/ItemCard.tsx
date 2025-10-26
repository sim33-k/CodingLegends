import { Button } from '../ui/button'
import { Plus, Trash2, Minus } from 'lucide-react'
import type { MenuItem } from '@/types/Common'

interface ItemCardListProps {
  items: MenuItem[];
  updateQuantity: (id: number, value: number) => void;
  removeFromOrder: (id: number) => void;
}

const ItemCard = ({item, updateQuantity, removeFromOrder}) => {
  return (
    <div className='border border-border rounded-lg p-3 bg-background'>
        <div className='flex justify-between items-start mb-2'>
            <div>
                <h3 className="font-medium">{item.name}</h3>
            </div>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 onClick={removeFromOrder} className="h-4 w-4" />
                </Button>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Plus onClick={() => updateQuantity(item.quantity + 1)} className="h-4 w-4" />
                </Button>
            </div>
            <div className='w-12 text-center font-medium'>
                {item.quantity}
            </div>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Minus onClick={() => updateQuantity(item.quantity - 1)} className="h-4 w-4" />
                </Button>
            </div>
            <div className='ml-auto font-medium'>
                Rs. {item.price}
            </div>

        </div>
      
    </div>
  )
}

export default ItemCard
