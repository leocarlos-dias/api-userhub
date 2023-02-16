import { Request, Response } from "express";
import { UpdateUserType, UserType } from "../interfaces";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const someUserData: UpdateUserType = request.body;
        const someUserId: number = Number(request.params.id);

        const updateUserService = new UpdateUserService();
        const result: UserType = await updateUserService.execute(someUserData, someUserId);

        return response.status(201).json(result);
    };
};