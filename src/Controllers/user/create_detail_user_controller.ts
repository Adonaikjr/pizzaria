import { Request, Response } from "express";
import { CreateDetailUserService } from "../../services/user/create_detail_user_service";


class Controller_DetailUser {

    async Play(request: Request, response: Response) {

        const user_id = request.user_id;

        const create_detail_user_service = new CreateDetailUserService()

        const user = await create_detail_user_service.Play(user_id)

        return response.json(user)
    }
}

export { Controller_DetailUser }