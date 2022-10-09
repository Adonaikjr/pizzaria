import { Request, Response } from "express";
import { ListCategoryService } from '../../services/product/list_category_service'
class Controller_ListCategory {
    async Play(request: Request, response: Response) {
        const category_id = request.query.category_id as string;

        const list_category_service = new ListCategoryService();

        const product = await list_category_service.Play({
            category_id
        })
        return response.json(product)
    }
}

export { Controller_ListCategory }