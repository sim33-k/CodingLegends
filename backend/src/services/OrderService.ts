import { CreateOrderDto } from "dtos/order/CreateOrderDto";
import { BaseService } from "./BaseService";
import { Order } from "generated/prisma";
import { IOrderRepository } from "repositories/interfaces/IOrderRepository";

class OrderService extends BaseService<CreateOrderDto, Order> {
    constructor(orderRepository: IOrderRepository) {
        super(orderRepository);
    }

}