import { Request, Response } from "express";
import { CreateDetailsOrderService } from "../../services/order/create_details_order_service";

class Controller_DetailsOrder{
    async Play( request:Request, response:Response ){
        const order_id = request.query.order_id as string;

        const create_details_order_service = new CreateDetailsOrderService();

        const orders = await create_details_order_service.Play({
            order_id
        })

        return response.json(orders)
    }
}

export {Controller_DetailsOrder}