import { Button } from '../ui/button';
import { ConfirmOrderDialog } from './ConfirmOrderDialog';

interface SummaryProps {
  createOrder: () => void;
  clearOrder: () => void;
  total: number;
  itemCount: number;
}

const Summary = ({total, createOrder, clearOrder, itemCount} : SummaryProps) => {

  return (
    
    <div className="border-t border-border pt-4 space-y-3">
      <div className="flex justify-between items-center text-lg font-semibold">
        <span>Total:</span>
        <span>Rs. {total}</span>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          onClick={clearOrder} 
          className="flex-1"
        >
          Clear Order
        </Button>
        <ConfirmOrderDialog 
          onConfirm={createOrder}
          total={total}
          itemCount={itemCount}
        />
      </div>
    </div>
  )
}

export default Summary
