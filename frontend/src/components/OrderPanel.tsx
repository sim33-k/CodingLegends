import React from "react";
import ItemCard from "./Order Panel/ItemCard";
import type { OrderItem } from "@/types/Common";
import ItemCardList from "./Order Panel/ItemCardList";

interface OrderPanelProps {
  orderItem: OrderItem[];
}

const OrderPanel = ({orderItem} : OrderPanelProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
        Current Order
      </h2>

      <div>
        {/* <ItemCard />
        <ItemCard /> */}
        {/* <ItemCardList orderItem={orderItem}/> */}
        {orderItem.map(item => item.name)}
      </div>
    </div>
  );
};

export default OrderPanel;
