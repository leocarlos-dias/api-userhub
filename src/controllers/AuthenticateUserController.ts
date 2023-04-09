import { Request, Response } from "express";
import { AuthenticateUserType } from "../interfaces";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user: AuthenticateUserType = request.body;
        const authenticateUserService = new AuthenticateUserService();
        const result: string = await authenticateUserService.execute(user);

        return response.status(200).json({ result });
    };
};
