function Hero(props) {
    const title = props.title;
    const subtitle = props.subtitle;
    return (
        <div id="page-circular-hero" className="bg-white page-hero mx-4 md:mx-8">
            <div className="grid grid-nogutter text-white py-8">
                <div className="col-12 md:col-4">
                    <section>
                        <img src="/assets/images/casual-life-3d-girl.png" alt="casual-life-3d-girl" />
                    </section>
                </div>
                <div className="col-12 md:col-8">
                        <h4 className="text-2xl text-color">{subtitle}</h4>
                        <h1 className="text-color">{title}</h1>
                        <p className="text-lg text-color">
                        The disciplinary commitee of Studebt school on the 29th of July had a meeting to deliberate on the date for the deadline of students owing the school management. It was later concluded that  complete payments should be made on or before  25th of August, 2022. Debtors who fail to meet up with the deadline will be penalized. Teachers were also instructed not to allow any debtor enter the learning environment(classroom).
                        </p>

                </div>
            </div>
        </div>
    );
}

export default Hero;