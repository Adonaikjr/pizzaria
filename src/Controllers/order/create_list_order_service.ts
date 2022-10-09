import { Request, Response } from 'express'
import { CreateListOrderService } from '../../services/order/create_list_order_service'

class Controller_ListOrder {
    async Play(request: Request, response: Response) {
        const create_list_order_service = new CreateListOrderService();

        const orders = await create_list_order_service.Play();

        return response.json(orders)
    }
}
export { Controller_ListOrder }