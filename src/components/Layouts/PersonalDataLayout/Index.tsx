import { useFormik } from "formik"
import { validationSchema } from "./ValidationSchema"
import { useNavigate } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { StepsDisplay } from "../../Other/StepsDisplay/Index"

export const PersonalDataLayout: React.FC = () => {
    const {personalData: {personalData: {name, surname, age, email, phoneNumber}, setPersonalData}} = useContextIsNull()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: name,
            surname: surname,
            age: age,
            email: email,
            phoneNumber: phoneNumber
        },
        validationSchema,
        onSubmit: values => {
            setPersonalData({
                name: values.name,
                surname: values.surname,
                age: values.age,
                email: values.email,
                phoneNumber: values.phoneNumber
            })
            navigate("/acc-type")
        }
    })

    return(
        <main>
            <StepsDisplay active={1}/>
            <section className="personal-data">
                <h2 className="personal-data__title">Personal Data</h2>
                <form className="personal-data__form" onSubmit={formik.handleSubmit}>
                    <label className="personal-data__label" htmlFor="name">
                        Name:
                        <input
                            className={formik.errors.name && formik.touched.name ? "personal-data__input personal-data__input--error" : "personal-data__input"}
                            id="name"
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            required
                        >
                        </input>
                        { formik.errors.name && formik.touched.name ? <p className="personal-data__error">{formik.errors.name}</p> : null }                   
                    </label>

                    <label className="personal-data__label" htmlFor="surname">
                        Surname:
                        <input
                            className={formik.errors.surname && formik.touched.surname ? "personal-data__input personal-data__input--error" : "personal-data__input"}
                            id="surname"
                            type="text" 
                            name="surname" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.surname} 
                            required
                        >
                        </input> 
                        { formik.errors.surname && formik.touched.surname ? <p className="personal-data__error">{formik.errors.surname}</p> : null }
                    </label>

                    <label className="personal-data__label" htmlFor="email">
                        E-mail:
                        <input 
                            className={formik.errors.email && formik.touched.email ? "personal-data__input personal-data__input--error" : "personal-data__input"}
                            id="email" 
                            type="email" 
                            name="email" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.email} 
                            required
                        >
                        </input>
                        { formik.errors.email && formik.touched.email ? <p className="personal-data__error">{formik.errors.email}</p> : null }
                    </label>

                    <label className="personal-data__label" htmlFor="age">
                        Age:
                        <input 
                            className={formik.errors.age && formik.touched.age ? "personal-data__input--age personal-data__input--error" : "personal-data__input--age"}
                            id="age" 
                            type="number" 
                            name="age" 
                            min={0} 
                            max={99} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.age} 
                            required
                        >
                        </input> 
                        { formik.errors.age && formik.touched.age ? <p className="personal-data__error">{formik.errors.age}</p> : null }
                    </label>

                    <label className="personal-data__label" htmlFor="phoneNumber">
                        Phone Number:
                        <input 
                            className={formik.errors.phoneNumber && formik.touched.phoneNumber ? "personal-data__input personal-data__input--error" : "personal-data__input"}
                            id="phoneNumber" type="text" 
                            name="phoneNumber" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber} 
                            required
                        >
                        </input>
                        { formik.errors.phoneNumber && formik.touched.phoneNumber ? <p className="personal-data__error">{formik.errors.phoneNumber}</p> : null }
                    </label>

                    <button className="personal-data__button--next" type="submit">Next</button>
                </form>
            </section>
        </main>
    )
}