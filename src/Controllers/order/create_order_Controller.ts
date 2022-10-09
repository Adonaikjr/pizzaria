import { Request, Response } from 'express'
import { CreateOrderService } from '../../services/order/create_order_service';

class Controller_Order {
    async Play(request: Request, response: Response) {
        const { table, name } = request.body;

        const create_order_service = new CreateOrderService();

        const order = await create_order_service.Play({
            table,
            name,
        })

        return response.json(order);

    }
}

export { Controller_Order }