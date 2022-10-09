import { Request, Response } from 'express'
import { CreateDeleteOrderService } from '../../services/order/create_delete_order_service'

class Controller_DeleteOrder{
    async Play(request:Request, response:Response) {
        
        const order_id = request.query.order_id as string;

        const create_delete_order_service = new CreateDeleteOrderService();

        const order = await create_delete_order_service.Play({
            order_id
        })
        return response.json(order)
    }
}

export { Controller_DeleteOrder }