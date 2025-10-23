
import { Request, Response } from "express";
import { CreateOrderDto } from "dtos/order/CreateOrderDto";
import { BaseController } from "./BaseController";
import { OrderService } from "services/OrderService";

export class OrderController extends BaseController {
    private orderService: OrderService;

    constructor(orderService: OrderService) {
        super();
        this.orderService = orderService;
    }

    // there a small issue here, but not writing this as an arrow function, we will lose
    // the reference to this, so I have to bind every method to its controller in the route level

    public async createOrder(request: Request, response: Response): Promise<void> {
        // we now make use the dto class we made, that also includes the validation rule
        const { error, value } = CreateOrderDto.validate(request.body);

        if (error) {
            return this.sendError(response, "Validation issue", 400);
        }

        const createdOrder = await this.orderService.createOrder(value);
        this.sendSuccess(response, createdOrder, 201);
    }

}