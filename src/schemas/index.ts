import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
    id: z.number().nonnegative(),
    name: z.string().max(20),
    email: z.string().email().max(100),
    password: z.string().max(120).transform(pass => hashSync(pass, 10)),
    admin: z.boolean().optional(),
    active: z.boolean()
});

export const createUserSchema = userSchema.omit({
    id: true,
    active: true
});

export const authenticateUserSchema = userSchema.pick({
    email: true,
    password: true
}).extend({
    password: z.string().max(120)
});

export const updateUserSchema = userSchema.pick({
    name: true,
    email: true,
    password: true
}).partial();