import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";

interface type_payload {
    sub: string;
}

export function Middle_auth(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as type_payload;
//recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
        request.user_id = sub;

        return next()

    } catch (error) {
        return response.status(400).end()
    }

}