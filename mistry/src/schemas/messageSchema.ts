import { z } from "zod";

const messageSchema = z.object({
    content: z.string()
        .min(10, {message: "Message content must be at least 10 characters"})
        .max(300, {message: "Message content must be at most 1000 characters long"}),
});

export default messageSchema;
