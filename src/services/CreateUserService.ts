import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { CreateUserType, UserType } from "../interfaces";


export class CreateUserService {
    async execute(user: CreateUserType): Promise<UserType> {
        const keys: string[] = Object.keys(user);
        const values: (string | boolean)[] = Object.values(user);

        const createdUser: QueryResult<UserType> = await client.query(format(`
            INSERT INTO users
                (%I)
            VALUES
                (%L)
            RETURNING  id, name, email, admin, active;`,
            keys,
            values,
        ));

        return createdUser.rows[0];
    };
};