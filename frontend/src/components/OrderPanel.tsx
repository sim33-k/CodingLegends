import React from "react";
import ItemCard from "./Order Panel/ItemCard";
import type { OrderItem } from "@/types/Common";
import ItemCardList from "./Order Panel/ItemCardList";
import Summary from "./Order Panel/Summary";

interface OrderPanelProps {
  orderItem: OrderItem[];
  updateQuantity: (id: number, value: number) => void;
  removeFromOrder: (id: number) => void;
}

const OrderPanel = ({orderItem, updateQuantity, removeFromOrder} : OrderPanelProps) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
        Current Order
      </h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        <ItemCardList items={orderItem} updateQuantity={updateQuantity} removeFromOrder={removeFromOrder} />
      </div>

      <div>
        <Summary />
      </div>
    </div>
  );
};

export default OrderPanel;
