import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { customError } from "../errors/customError";
import { AuthenticateUserType, UserType } from "../interfaces";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user: AuthenticateUserType = request.body;
        const authenticateUserService = new AuthenticateUserService();
        const result: UserType = await authenticateUserService.execute(user);

        if (!result || !result.active) {
            throw new customError(401, "Wrong email/password");
        };
        
        const correctPassword: boolean = await compare(user.password, result.password)
        if (!correctPassword) {
            throw new customError(401, "Wrong email/password");                    
        }

        const token = sign({ adm: result.admin }, String(process.env.SECRET_KEY), {
            subject: String(result.id),
            expiresIn: "15m"
        });

        return response.status(200).json({ token });
    };
};
