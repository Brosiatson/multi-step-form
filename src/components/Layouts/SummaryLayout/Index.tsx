import { Link } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { StepsDisplay } from "../../Other/StepsDisplay/Index"

export const SummaryLayout: React.FC = () => {
    const {accountType: {accountType}, addons: {addons}} = useContextIsNull()

    const customProfile = addons.customProfile.active ? <li>Custom Profile - {addons.customProfile.price}$ / month</li> : null
    const largerStorage = addons.largerStorage.active ? <li>Larger Storage - {addons.largerStorage.price}$ / month</li> : null
    const onlineService = addons.onlineService.active ? <li>Online Service - {addons.onlineService.price}$ / month</li> : null
    const noAddons = !addons.onlineService.active && !addons.largerStorage.active && !addons.onlineService.active ? <li>Without Addons</li> : null

    let totalPrice = accountType.price
    Object.entries(addons).map(([name, props], index) => props.active ? totalPrice += props.price : null)

    return(
        <main>
            <StepsDisplay active={4}/>
            <section className="summary">
                <h2 className="summary__title">Summary</h2>
                <ul className="summary__list">
                    <ul className="summary__list--sublist">
                        <h3 className="summary__list--title">Account Type:</h3>
                        <li>{accountType.type} - {accountType.price}$ / month</li>
                    </ul>
                    <ul className="summary__list--sublist">
                        <h3 className="summary__list--title">Addons:</h3>
                        { customProfile }
                        { largerStorage }
                        { onlineService }
                        { noAddons }
                    </ul>
                    <h3 className="summary__list--price">Total Price: {totalPrice}$ / month</h3>
                </ul>
                <nav className="summary__nav">
                    <Link className="summary__link" to="/addons">Prev</Link>
                    <Link className="summary__link" to="">Finish</Link>
                </nav>
            </section>
        </main>
    )
}