import { Request, Response } from "express";
import { CreateFinishOrderService } from "../../services/order/create_finish_order_service";

class Controller_FinishOrder {
    async Play(request: Request, response: Response) {
        const { order_id } = request.body

        const create_finish_order_service = new CreateFinishOrderService();

        const order = await create_finish_order_service.Play({
            order_id
        })
        return response.json(order);
    }
}
export { Controller_FinishOrder }