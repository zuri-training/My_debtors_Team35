import Layout from '../../components/layout'
import AuthLayout from '../../components/auth-layout'
import Link from 'next/link'

export default function Student(props) {
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
                <p className="text-xl mt-0 mb-4 text-700 line-height-3 md:text-right">Not a student? 
                    <Link href="/signup/student">
                        <a className="text-primary px-2"> Sign up</a>
                    </Link>
                </p>
                    <h2 className="text-4xl font-bold mb-3">Login to StuDebt</h2>
                    <p className="text-xl mt-0 mb-4 text-700 line-height-3">
                        Login to contend your debts
                    </p>
                    
                </section>
                <section>
                    
                </section>
            </div>

        </div>
    )
}

Student.getLayout = function getLayout(page) {
    return (
        <Layout title="About studebt">
            <AuthLayout>{page}</AuthLayout>
        </Layout>
    )
}