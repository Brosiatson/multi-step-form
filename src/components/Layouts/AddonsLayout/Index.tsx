import { Link } from "react-router-dom"
import { useContextIsNull } from "../../../contexts/context"
import { StepsDisplay } from "../../Other/StepsDisplay/Index"

export const AddonsLayout: React.FC = () => {
    const {addons: {addons: {onlineService, largerStorage, customProfile}, setAddons}} = useContextIsNull()

    const handleChange = (value: string) => {
        console.log(onlineService)
        switch(value) {
            case "onlineService": setAddons(value => {
                return { ...value, onlineService: {...value.onlineService, active: !onlineService.active} }
            }); break;
            case "largerStorage": setAddons(value => {
                return { ...value, largerStorage: {...value.largerStorage, active: !largerStorage.active} }
            }); break;
            case "customProfile": setAddons(value => {
                return { ...value, customProfile: {...value.customProfile, active: !customProfile.active} }
            }); break;
        }
    }

    return(
        <main>
            <StepsDisplay active={3} />
            <section className="addons">
                <h2 className="addons__title">Add-ons</h2>
                <form className="addons__form">
                    <label className="addons__label">
                        <h3 className="addons__input--title">Online Service - {onlineService.price}$</h3>
                        <input type="checkbox" value="onlineService" className="addons__input" checked={onlineService.active} onChange={(e) => handleChange(e.currentTarget.value)} />
                    </label>
                    <label className="addons__label">
                        <h3 className="addons__input--title">Larger Storage - {largerStorage.price}$</h3>
                        <input type="checkbox" value="largerStorage" className="addons__input" checked={largerStorage.active} onChange={(e) => handleChange(e.currentTarget.value)} />
                    </label>
                    <label className="addons__label">
                        <h3 className="addons__input--title">Custom Profile - {customProfile.price}$</h3>
                        <input type="checkbox" value="customProfile" className="addons__input" checked={customProfile.active} onChange={(e) => handleChange(e.currentTarget.value)} />
                    </label>
                </form>
                <nav className="addons__nav">
                    <Link className="addons__link" to="/acc-type">Prev</Link>
                    <Link className="addons__link" to="/summary">Next</Link>
                </nav>
            </section>
        </main>
    )
}