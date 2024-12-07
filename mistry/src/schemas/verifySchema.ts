import { z } from "zod";

const verifySchema = z.object({
    code: z.string().length(6, {message: "Code must be 6 digits long"}),
});

export default verifySchema;
