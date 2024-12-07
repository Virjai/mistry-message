import { z } from "zod";

const acceptingMessageSchema = z.object({
    acceptMessages: z.boolean(),
});

export default acceptingMessageSchema;
