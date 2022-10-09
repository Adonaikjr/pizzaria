import prismaClient from "../../prisma";

interface type_item_request {
    order_id: string;
    product_id: string;
    amount: number;
}

class CreateAddItemService {
    async Play({ order_id, product_id, amount }: type_item_request) {
        const order = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount
            }
        })
        return order;
    }
}

export { CreateAddItemService }