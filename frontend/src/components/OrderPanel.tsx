import type { OrderItem } from "@/types/Common";
import ItemCardList from "./Order Panel/ItemCardList";
import Summary from "./Order Panel/Summary";

interface OrderPanelProps {
  orderItem: OrderItem[];
  updateQuantity: (id: number, value: number) => void;
  removeFromOrder: (id: number) => void;
  clearOrder: () => void;
  setAlertState: React.Dispatch<React.SetStateAction<{
    show: boolean;
    type: string;
    message: string;
    title: string;
  }>>;
}

const OrderPanel = ({orderItem, updateQuantity, removeFromOrder, clearOrder, setAlertState }:OrderPanelProps) =>{

  const getTotal = () => {
    const total = orderItem.reduce((acc, item) => {
      return acc + (parseFloat(item.price) * item.quantity);
    }, 0)

    return total;
  }

  // console.log(getTotal);

  const createOrder = () => {
    console.log("test ordr");
  }



  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
        Current Order
      </h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        <ItemCardList items={orderItem} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} />
      </div>

      <div>
        <Summary total={getTotal()} clearOrder={clearOrder} createOrder={createOrder} itemCount={orderItem.length} setAlertState={setAlertState} />
      </div>
    </div>
  );
};

export default OrderPanel;
