import validator from 'validator';
import { z } from "zod";
import { parsePhoneNumber } from 'react-phone-number-input';

const schema = z.object({
    email: z.string({
        required_error: "Inserisci l'email!"
    }).email({ message: "Inserisci un email valida!" }),
    phoneInputWithCountrySelect: z.string({ required_error: "Inserisci il numero!", invalid_type_error: "Inserisci un numero valido!" }).refine(val => parsePhoneNumber(val), { message: "Numero di telefono non valido!" }),
    message: z.string().optional(),
    firstName: z.string().refine(val => validator.isAlpha(val) && val.length >= 3, { message: "Inserisci un nome valido!" }),
    lastName: z.string().refine(val => validator.isAlpha(val) && val.length >= 3, { message: "Inserisci un congnome valido!" })
}).required();
export type SchemaType = z.infer<typeof schema>;

export default schema;