import { Request, Response } from "express";
import { CreateCategoryService } from '../../services/category/create_category_service'

class Controller_Category {
    async Play(request: Request, response: Response) {
        const { name } = request.body;

        const create_category_service = new CreateCategoryService()

        const category = await create_category_service.Play({
            name
        })

        return response.json(category);
    }
}

export { Controller_Category }