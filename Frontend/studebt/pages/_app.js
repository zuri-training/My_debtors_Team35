import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme css
import "../styles/theme.css"; //theme css
import "../styles/globals.css";
import "../styles/utilities.css";
import "../styles/DialogDemo.css";
import '../styles/schoolDash.css'
import '../styles/SchoolMenuPages.css'

import '../styles/auth.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import ErrorBoundary from "../components/errorboundary";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
