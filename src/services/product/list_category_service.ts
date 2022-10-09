import prismaClient from "../../prisma";

interface type_listProduct {
    category_id: string;
}

class ListCategoryService {
    async Play( { category_id } : type_listProduct ) {
        const searchProducts = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })
        return searchProducts;
    }
}

export { ListCategoryService }