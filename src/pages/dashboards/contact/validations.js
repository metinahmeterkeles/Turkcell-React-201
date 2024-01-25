import { object, string } from "yup";

const messageRequired = "Bu alan zorunludur";

const contactSchema = object({
  firstName: string().required(messageRequired),
  lastName: string().required(messageRequired),
  email: string()
    .email("Geçerli bir e-mail adresi giriniz!")
    .required(messageRequired),
  message: string()
    .min(5, "Minimum 5 karakter giriniz!")
    .required(messageRequired),
});

export default contactSchema;
