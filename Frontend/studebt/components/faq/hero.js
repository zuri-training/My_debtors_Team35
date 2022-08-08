
function Hero(props) {
    const title = props.title;
    const subtitle = props.subtitle;
    return (
        <div id="page-faq-hero" className="page-hero">
            <div className="grid grid-nogutter text-white px-4 md:px-8 py-8">
                <div className="col-12 text-center">
                    <section>
                        <h1>{title}</h1>
                    </section>
                    <section>
                        <img src="/assets/images/line-spacer.png" alt="line spacer"/>
                    </section>
                    <section>
                        <h4 className="text-2xl p-6">{subtitle}</h4>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Hero;