import { Request, Response } from "express";
import { UserType } from "../interfaces";
import { GetAllUserService } from "../services/GetAllUserService";

export class GetAllUserController {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllUserService = new GetAllUserService();
        const result: UserType[] = await getAllUserService.execute();

        return response.status(200).json(result);
    };
};