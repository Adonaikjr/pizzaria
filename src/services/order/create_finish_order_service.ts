import prismaClient from "../../prisma";

interface type_order_request {
    order_id: string;
}

class CreateFinishOrderService {
    async Play({ order_id }: type_order_request) {

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                status: true,
            }
        })
        return order;
    }
}

export { CreateFinishOrderService }