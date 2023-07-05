import { StepsDisplay } from "../../Other/StepsDisplay/Index"
import { useContextIsNull } from "../../../contexts/context"
import { Link } from "react-router-dom"

export const AccountTypeLayout: React.FC = () => {
    const {accountType: {accountType: { type }, setAccountType}} = useContextIsNull()

    const handleChange = (type: string, price: number) => {
        console.log(type, price)
        setAccountType({
            type: type,
            price: price
        })
    }

    return(
        <main>
            <StepsDisplay active={2}/>
            <section className="account-type">
                <h2 className="account-type__title">Account Type</h2>
                <form className="account-type__form">
                    <label className={type === "Arcade" ? "account-type__label--checked" : "account-type__label"}>
                        <h3 className="account-type__input--title">Arcade</h3>
                        <p className="account-type__input--price">9$</p>
                        <input
                            className="account-type__input"
                            type="radio"
                            name="acc-type"
                            onChange={(e) => handleChange(e.currentTarget.value, 9)}
                            value="Arcade"
                            checked={type === "Arcade"}
                        >
                        </input>
                    </label>
                    <label className={type === "Advanced" ? "account-type__label--checked" : "account-type__label"}>
                        <h3 className="account-type__input--title">Advanced</h3>
                        <p className="account-type__input--price">12$</p>
                        <input
                            className="account-type__input"
                            type="radio"
                            name="acc-type"
                            onChange={(e) => handleChange(e.currentTarget.value, 12)}
                            value="Advanced"
                            checked={type === "Advanced"}
                        >
                        </input>
                    </label>
                    <label className={type === "Pro" ? "account-type__label--checked" : "account-type__label"}>
                        <h3 className="account-type__input--title">Pro</h3>
                        <p className="account-type__input--price">15$</p>
                        <input
                            className="account-type__input"
                            type="radio"
                            name="acc-type"
                            onChange={(e) => handleChange(e.currentTarget.value, 15)}
                            value="Pro"
                            checked={type === "Pro"}
                        >
                        </input>
                    </label>
                </form>
                <nav className="account-type__nav">
                    <Link className="account-type__link" to="/">Prev</Link>
                    <Link className="account-type__link" to="/addons">Next</Link>
                </nav>
            </section>
        </main>
    )
}