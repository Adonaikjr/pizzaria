import { Request, Response } from 'express'
import { CreateAuthUserService  } from '../../services/user/create_auth_user_service'

class ControllerUserAuthCreate {
    async Play(request: Request, response: Response) {
        const { email, password } = request.body
        const create_auth_user_service = new CreateAuthUserService()

        const auth = await create_auth_user_service.Play({
            email, 
            password
        })
        return response.json(auth)
}
}

export { ControllerUserAuthCreate }