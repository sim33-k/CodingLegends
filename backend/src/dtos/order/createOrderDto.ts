import Joi from "joi";


// instead of creating dtos and validation seperately, i have combined it in classy way
export class CreateOrderItemDto{
    public menuId: number;
    public quantity: number;

    constructor(menuId: number,quantity: number) {
        this.menuId = menuId;
        this.quantity = quantity;
    }

    public static schema = Joi.object({
        menuId: Joi.number().required(),
        quantity: Joi.number().required()
    });

    public static validate(data: any) {
        return this.schema.validate(data);
    }

}


// similarly, for create order
export class CreateOrderDto{
    public items: CreateOrderItemDto[];

    constructor(items: CreateOrderItemDto[]) {
        this.items = items;
    }

    public static schema = Joi.object({
        items: Joi.array().items(CreateOrderItemDto.schema).required()
    });

    public static validate(data: any) {
        return this.schema.validate(data);
    }

}

// export interface createOrderItem {
//     menuItemId: number;
//     quantity: number;
// }

// export interface createOrder {
//     items: createOrderItem[];
// }