import type { OrderItem } from '@/types/Common';

interface SummaryProps {

  createOrder: (orderItem: OrderItem[]) => void;
  clearOrder: () => void;
  total: number;
}

const Summary = ({total, createOrder, clearOrder} : SummaryProps) => {
    console.log(total, createOrder, clearOrder);

  return (
    <div>
      the total is {total}
    </div>
  )
}

export default Summary
