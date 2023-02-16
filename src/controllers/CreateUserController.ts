import { Request, Response } from "express";
import { CreateUserType, UserType } from "../interfaces";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const user: CreateUserType = request.body;

        const createUserService = new CreateUserService();
        const result: UserType = await createUserService.execute(user);

        return response.status(201).json(result);
    };
};