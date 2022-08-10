import { useState } from 'react'
import Layout from '../../components/layout'
import AuthLayout from '../../components/auth-layout'
import Link from 'next/link'
import StepWizard from "react-step-wizard"
import StepOne from '../../components/widgets/forms/school-signup/step-one'
import StepTwo from '../../components/widgets/forms/school-signup/step-two'
import StepThree from '../../components/widgets/forms/school-signup/step-three'

export default function School(props) {

    const [twoFeeTypes, setTwoFeeTypes] = useState(false);

    const addFormTwoHandler = () => setTwoFeeTypes(true);

    const removeFormTwoHandler = () => setTwoFeeTypes(false);

    return (
        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-12 md:col-4 md:h-screen auth-sidebar p-6">
                <Link href="/">
                    <h1 className='grid align-items-center text-black text-6xl font-bold'>
                        <img src="/assets/images/logo-2.svg" alt="sidebar-logo" />
                        <span className='px-2'>StuDEPT</span>
                    </h1>
                </Link>
                <p className="text-xl font-bold mt-3 text-primary">
                    Login as student, with your National Identity Number (NIN)
                    and password.
                </p>
            </div>
            <div className="col-12 md:col-8 p-4 md:p-8">
                <section>
                    <p className="text-xl mt-0 mb-4 text-700 line-height-3 md:text-right">Already a partner
                        <Link href="/login/school">
                            <a className="text-primary px-2"> Log in</a>
                        </Link>
                    </p>
                    <h2 className="text-4xl font-bold mb-3">Sign up as a partner</h2>
                </section>
                <section>
                    <form>
                        <StepWizard transitions="nothing">
                            <StepOne addFormTwoHandler={addFormTwoHandler} />
                            {twoFeeTypes ? (
                                <StepTwo removeFormTwoHandler={removeFormTwoHandler} />
                            ) : null}
                            <StepThree />
                        </StepWizard>
                    </form>

                </section>
            </div>

        </div>
    )
}

School.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <AuthLayout>{page}</AuthLayout>
        </Layout>
    )
}