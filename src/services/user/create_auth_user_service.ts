import prismaClient from "../../prisma"

interface types_auth_request{
    email: string;
    password: string;
}

class CreateAuthUserService {
    async Play( { email, password } : types_auth_request ) {
            console.log(email) 

            return{ ok : true}
    }
}

export { CreateAuthUserService }