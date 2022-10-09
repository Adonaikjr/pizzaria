import prismaClient from "../../prisma";

interface type_category_Request {
    name: string;
}

class CreateCategoryService {
    async Play({ name }: type_category_Request) {
        
        if (name === '') {
            throw new Error('noma invalido')
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true
            }
        });

        return category
    }
}

export { CreateCategoryService }