import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

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

        if (!clonePassword) {
            throw new Error('email ou senha incorretos')
        }
        //gerando token user
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            })

        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
         }
    }
}

export { CreateAuthUserService }