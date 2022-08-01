import '../styles/globals.css'
import '../styles/utilities.css'

import ErrorBoundary from '../components/errorboundary'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}