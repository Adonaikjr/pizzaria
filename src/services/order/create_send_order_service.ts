import prismaClient from "../../prisma"

interface type_send_order_request {
    order_id: string;
}

class CreateSendOrderService {
    async Play({ order_id }: type_send_order_request) {

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })
        return order;
    }
}

export { CreateSendOrderService }