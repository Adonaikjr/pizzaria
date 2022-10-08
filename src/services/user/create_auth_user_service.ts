import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'
interface types_auth_request {
    email: string;
    password: string;
}

class CreateAuthUserService {
    async Play({ email, password }: types_auth_request) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        //checkk email existente
        if (!user) {
            throw new Error('email ou senha incorreto')
        }

        //check password

        const clonePassword = await compare(password, user.password)

        if(!clonePassword){
            throw new Error('email ou senha incorretos')
        }
        
        return { ok: true }
    }
}

export { CreateAuthUserService }