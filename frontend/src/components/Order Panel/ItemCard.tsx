import { Button } from '../ui/button'
import { Plus, Trash2, Minus } from 'lucide-react'

const ItemCard = () => {
  return (
    <div className='border border-border rounded-lg p-3 bg-background'>
        <div className='flex justify-between items-start mb-2'>
            <div>
                <h3 className="font-medium">Rice</h3>
            </div>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
            <div className='w-12 text-center font-medium'>
                0
            </div>
            <div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                    <Minus className="h-4 w-4" />
                </Button>
            </div>
            <div className='ml-auto font-medium'>
                Rs. 100
            </div>

        </div>
      
    </div>
  )
}

export default ItemCard
