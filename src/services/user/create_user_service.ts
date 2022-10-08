import { hash } from "bcryptjs";
import  prismaClient  from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async Play({ name, email, password}: UserRequest) {

        const bcryptjsHash = await hash(password, 8 )

        //verificar email 
        if (!email) {
            throw new Error('email incorreto')
        }

        //verificar duplicidade email
        const checkEmailUser = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (checkEmailUser) {
            throw new Error('Email já cadastrado')
        }

        const user = await prismaClient.user.create({
            data:{ 
                name:name, 
                email:email, 
                password: bcryptjsHash
            },
            //return user
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}
export { CreateUserService }