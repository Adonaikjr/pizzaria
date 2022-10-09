import prismaClient from "../../prisma";

interface type_details_request {
    order_id: string;
}

class CreateDetailsOrderService {
    async Play({ order_id }: type_details_request) {
        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product: true,
                order:true
            }
        })
        return orders;
    }
}

export { CreateDetailsOrderService }