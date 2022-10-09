import { Request, Response } from 'express'
import { CreateDeleteItem } from '../../services/order/create_delete_item_service';

class Controller_DeleteItem {
    async Play(request: Request, response: Response) {
        const item_id = request.query.item_id as string;

        const create_delete_item_service = new CreateDeleteItem();

        const order = await create_delete_item_service.Play({
            item_id
        })
        return response.json(order)
    }
}
export { Controller_DeleteItem }