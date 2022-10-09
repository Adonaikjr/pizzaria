import { Request, Response } from "express";
import { CreateAddItemService } from "../../services/order/create_add_item_service";

class Controller_AddItem {
    async Play(request: Request, response: Response) {
        const { order_id, product_id, amount } = request.body

        const create_add_item_service = new CreateAddItemService();
        const order = await create_add_item_service.Play({
            order_id,
            product_id,
            amount
        })
        return response.json(order)
    }
}

export { Controller_AddItem }