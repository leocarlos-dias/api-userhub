import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { UserType } from "../interfaces";

export class EmployUserService {
    async execute(id: number): Promise<UserType> {

        const user: QueryResult<UserType> = await client.query(format(`
            UPDATE 
                users
            SET 
                active = true
            WHERE 
                id = %L AND active = false
            RETURNING id, name, email, admin, active;`,
            id
        ));

        return user.rows[0];
    };
};