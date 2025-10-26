import React from "react";
import ItemCard from "./Order Panel/ItemCard";

const OrderPanel = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-b border-border pb-2 mb-4">
        Current Order
      </h2>

      <div>
        <ItemCard />
      </div>
    </div>
  );
};

export default OrderPanel;
