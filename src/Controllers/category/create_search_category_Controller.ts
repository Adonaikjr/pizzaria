import { Request, Response } from "express";
import { SearchCategoryService } from '../../services/category/search_category_service'
class Controller_SearchCategory {
    async Play(request: Request, response: Response) {

        const search_category_service = new SearchCategoryService();

        const category = await search_category_service.Play();

        return response.json(category);
    }
}

export { Controller_SearchCategory }