import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/create_user_service'

class Controller_UserCreate {
    async Play(request: Request, response: Response) {
        const { name, email, password } = request.body
        const create_user_service = new CreateUserService();

        const user = await create_user_service.Play({
            name, email, password
        });

        return response.json(user)
    }
}

export { Controller_UserCreate }