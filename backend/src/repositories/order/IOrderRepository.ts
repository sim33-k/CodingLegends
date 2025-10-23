import { CreateOrderDto } from "dtos/order/CreateOrderDto";
import { Order } from "generated/prisma";

interface IOrderRepository {
    createOrder(order: CreateOrderDto): Promise<Order>;
    getOrderById(orderId: number): Promise<Order | null>;
    getOrders(): Promise<Order[]>;
    getOrdersWithDetails(): Promise<Order[]>;
    // didnt add update and delete, because the question doesnt require them
}
