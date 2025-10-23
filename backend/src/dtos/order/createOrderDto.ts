export interface createOrderItem {
    menuItemId: number;
    quantity: number;
}

export interface createOrder {
    items: createOrderItem[];
}