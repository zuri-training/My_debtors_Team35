import Link from 'next/link'

function Article(props) {

    return (
        <div id="page-circular-hero" className="bg-white page-hero mx-4 md:mx-8">
            <div className="grid grid-nogutter text-white">
                <div className="col-12 md:col-8">
                    <h3 className="text-4xl font-bold mb-6 text-color">CONNECT WITH <br />
                        <span className="text-primary">stuTRIBE</span></h3>
                    <p className="text-lg text-color">
                        Stutribe is a community of learners with a common goal. The aim is to get access to free resources that will aid learning in different fields.
                    </p>
                    <section className='py-4'>
                        <Link href="/">
                            <a>Read more</a>
                        </Link>
                    </section>
                </div>
                <div className="col-12 md:col-4">
                    <section>
                        <img src="/assets/images/casual-life-3d-girl-and-man.png" alt="casual-life-3d-girl" />
                    </section>

                </div>

            </div>

        </div>
    );
}

export default Article;