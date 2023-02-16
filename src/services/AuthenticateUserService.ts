import { QueryResult } from "pg";
import format from "pg-format";
import { client } from "../config/database";
import { AuthenticateUserType, UserType } from "../interfaces";


export class AuthenticateUserService {
    async execute(user: AuthenticateUserType): Promise<UserType> {
        const { email } = user;

        const userFound: QueryResult<UserType> = await client.query(format(`
            SELECT * FROM 
                users
            WHERE 
                email = %L;`,
            email
        ));

        return userFound.rows[0];
    };
};