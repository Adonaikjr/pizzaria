import prismaClient from "../../prisma";

interface type_order_delete_Request {
    order_id: string;
}

class CreateDeleteOrderService {
    async Play({ order_id }: type_order_delete_Request) {

        const order = await prismaClient.order.delete({
            where:{
                id:order_id
            }
        })
        return order;
    }
}

export { CreateDeleteOrderService };