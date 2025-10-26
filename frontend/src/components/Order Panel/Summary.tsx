import { Button } from '../ui/button';
import { ConfirmOrderDialog } from './ConfirmOrderDialog';

interface SummaryProps {
  createOrder: () => void;
  clearOrder: () => void;
  total: number;
  itemCount: number;
  setAlertState: React.Dispatch<React.SetStateAction<{
    show: boolean;
    type: string;
    message: string;
    title: string;
  }>>;
}

const Summary = ({total, createOrder, clearOrder, itemCount, setAlertState }: SummaryProps) => {

  const handleCreateOrderClick = () => {
    if (itemCount === 0) {
      setAlertState({
        show: true,
        type: 'error',
        message: 'Cannot create an empty order. Please add items first.',
        title: 'Empty Order'
      });
    }
  };

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
        {itemCount === 0 ? (
          <Button
            className="flex-1"
            onClick={handleCreateOrderClick}
          >
            Create Order
          </Button>
        ) : (
          <ConfirmOrderDialog
            onConfirm={createOrder}
            total={total}
            itemCount={itemCount}
          />
        )}
      </div>
    </div>
  )
}

export default Summary
