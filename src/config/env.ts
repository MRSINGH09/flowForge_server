import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default("5000"),
    DATABASE_URL: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    throw new Error(`Environment variables validation failed: ${JSON.stringify(parsedEnv.error.flatten())}`);
}

export const env = parsedEnv.data;