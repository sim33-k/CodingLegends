import { database } from "lib/Database";
import { IOrderRepository } from "repositories/interfaces/IOrderRepository";
import { Order } from "generated/prisma";
import { CreateOrderDto, CreateOrderItemDto } from "dtos/order/CreateOrderDto";


class PrismaOrderRepository implements IOrderRepository {
    
}
