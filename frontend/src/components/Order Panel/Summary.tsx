import { Button } from '../ui/button';

interface SummaryProps {

  createOrder: () => void;
  clearOrder: () => void;
  total: number;
}

const Summary = ({total, createOrder, clearOrder} : SummaryProps) => {
    console.log(total, createOrder, clearOrder);

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
        <Button 
          onClick={createOrder} 
          className="flex-1"
        >
          Create Order
        </Button>
      </div>
    </div>
  )
}

export default Summary
