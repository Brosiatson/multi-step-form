export const StepsDisplay: React.FC<{active: number}> = ({active}) => {
    return(
        <section className="steps">
            <div className="steps__element">
                <div className={ active === 1 ? "steps__circle--active" : "steps__circle"}>1</div>
                <p className="steps__title">Personal Data</p>
            </div>
            <div className="steps__element">
                <div className={ active === 2 ? "steps__circle--active" : "steps__circle"}>2</div>
                <p className="steps__title">Account Type</p>
            </div>
            <div className="steps__element">
                <div className={ active === 3 ? "steps__circle--active" : "steps__circle"}>3</div>
                <p className="steps__title">Add-ons</p>
            </div>
            <div className="steps__element">
                <div className={ active === 4 ? "steps__circle--active" : "steps__circle"}>4</div>
                <p className="steps__title">Summary</p>
            </div>
        </section>
    )
}