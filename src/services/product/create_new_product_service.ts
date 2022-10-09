import prismaClient from "../../prisma";

interface types_product_Request {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

export class CreateNewProductService {
    async execute({ name, price, description, banner, category_id }: types_product_Request) {
        return { ok: true }
    }
}