import prismaClient from "../../prisma";

interface type_order_request {
    table: number;
    name: string;
}

class CreateOrderService {
    async Play({ name, table }: type_order_request) {

        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
            }
        })
        return order;
    }
}
export { CreateOrderService }