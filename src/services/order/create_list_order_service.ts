import prismaClient from "../../prisma";

class CreateListOrderService {
    async Play() {

        const orders = await prismaClient.order.findMany({
            where: {
                draft: false,
                status: false
            },
        })

        return orders;
    }
}
export { CreateListOrderService }