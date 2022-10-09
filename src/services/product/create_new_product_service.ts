import prismaClient from "../../prisma";

interface types_product_Request {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateNewProductService {
    
    async Play({ name, price, description, banner, category_id }: types_product_Request) {

        const products = await prismaClient.product.create({
            data: {
                name: name,
                price:price,
                description:description,
                banner:banner,
                category_id:category_id,
            }
        });

        return products;

    }
}
export { CreateNewProductService }

