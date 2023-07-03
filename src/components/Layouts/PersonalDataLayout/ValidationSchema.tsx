import * as yup from 'yup'

export const validationSchema = () => yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name is too short (min. 2)")
        .max(16, "Name is too long (max. 16)")
        .matches(/^([a-z]|[A-Z]){0,}$/, "Uncorrect name"),
    surname: yup
        .string()
        .required("Surname is required")
        .min(2, "Surname is too short (min. 3)")
        .max(20, "Surname is too long (max. 20)")
        .matches(/^([a-z]|[A-Z]){0,}$/, "Uncorrect surname"),
    age: yup
        .number()
        .required("Age is required")
        .min(18, "Age is too low"),
    email: yup
        .string()
        .required("Email is required")
        .email("Uncorrect email"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]{7,11}$/, "Phone number is uncorrect")
})