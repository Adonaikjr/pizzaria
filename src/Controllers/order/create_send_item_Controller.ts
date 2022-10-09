import { Request, Response } from "express";
import { CreateSendOrderService } from "../../services/order/create_send_order_service";

class Controller_SendItem {
    async Play(request: Request, response: Response) {
        const { order_id } = request.body
        const create_send_order_service = new CreateSendOrderService();

        const order = await create_send_order_service.Play({
            order_id
        })

        return response.json(order)
    }
}

export { Controller_SendItem }