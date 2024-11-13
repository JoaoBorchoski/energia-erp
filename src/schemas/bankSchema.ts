// schema.ts
import { z } from "zod";

export const bankSchema = z.object({
    ban_codigo: z.number().min(0, "Bank code must be a non-negative integer"),
    ban_numero: z.string().refine((val) => /^\d+$/.test(val), "Caractéries devem conter apenas numéricos"),
    ban_descricao: z.string().min(1, "Nome do banco é obrigatório"),
    ban_habilitado_boleto: z.number().min(0).max(1, "Enabled boleto must be 0 or 1"),
    ban_user_insert: z.string().min(1, "User insert is required"),
    ban_date_insert: z.string().datetime(),
    ban_user_update: z.string().min(1, "User update is required"),
    ban_date_update: z.string().datetime(),
});

// Define the TypeScript type for the schema
export type BankFormData = z.infer<typeof bankSchema>;
