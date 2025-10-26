import React from 'react'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'

const ItemCard = () => {
  return (
    <div className='border border-border rounded-lg p-3 bg-background'>
      <div className='flex justify-between items-start mb-2'>
        <div>
            <h3 className="font-medium">Rice</h3>
            <p className="text-sm text-muted-foreground">100</p>
        </div>
        <div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive">
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
        
      </div>
    </div>
  )
}

export default ItemCard
