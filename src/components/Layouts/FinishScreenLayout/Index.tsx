import React from "react";
import { useContextIsNull } from "../../../contexts/context";

export const FinishScreenLayout: React.FC = () => {
    const {personalData: {personalData}} = useContextIsNull()

    return(
        <main>
            <section className="finish">
                <h2 className="finish__title">Thank You!!!</h2>
                <p className="finish__text">Thank you for buy subcription. We sent all information on your email: {personalData.email}.</p>
            </section>
        </main>
    )
}