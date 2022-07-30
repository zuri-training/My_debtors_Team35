import Head from 'next/head'

export default function Layout( {  title, children } ) {
    return (
        <>
            <Head>
                <title>Studept - {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    )
}