import { QueryResult } from "pg";
import { client } from "../config/database";
import { UserType } from "../interfaces";


export class GetAllUserService {
    async execute(): Promise<UserType[]> {

        const users: QueryResult<UserType> = await client.query(`
            SELECT 
                id, name, email, admin, active
            FROM 
                users;
        `);

        return users.rows;
    };
};