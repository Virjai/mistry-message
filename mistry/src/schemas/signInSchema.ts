import { z } from "zod";

const signInSchema = z.object({
    identifier: z.string().min(1, {message: "Username or email is required"}),
    password: z.string().min(1, {message: "Password is required"}),
});

export default signInSchema;
