  import { response } from "express";
import prismaClient from "../../prisma";

  class SearchCategoryService {
    async Play(){
        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                name:true
            }
        })
        return category;
    }
  }

  export { SearchCategoryService }