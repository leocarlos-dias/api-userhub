import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { UpdateUserType, UserType } from "../interfaces";


export class UpdateUserService {
    async execute(user: UpdateUserType, id: number): Promise<UserType> {
        const keys: string[] = Object.keys(user);
        const values: string[] = Object.values(user);

        const updatedUser: QueryResult<UserType> = await client.query(format(`
            UPDATE users
                SET (%I) = ROW (%L)
            WHERE
                id = %L
            RETURNING  id, name, email, admin, active;`,
            keys,
            values,
            id
        ));

        return updatedUser.rows[0];
    };
};