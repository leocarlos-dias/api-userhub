import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { customError } from "../errors/customError";
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

        if (!user.rows[0]) {
            throw new customError(400, "User already active");
        };

        return user.rows[0];
    };
};