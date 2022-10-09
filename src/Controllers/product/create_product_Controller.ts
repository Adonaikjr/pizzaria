import { Request, Response } from "express";
import { CreateNewProductService } from "../../services/product/create_new_product_service";
export class Controller_Product {
    async Play(request: Request, response: Response) {
        const { name, price, description, category_id } = request.body



        const create_new_product_service = new CreateNewProductService();

        if (!request.file) {
            throw new Error('Error upload file')
        } else {

            const { originalname, filename } = request.file;
            console.log(filename)

            const product = await create_new_product_service.execute({
                name,
                price,
                description,
                category_id,
                banner: ''
            });
            return response.json(product);
        }
    }
}