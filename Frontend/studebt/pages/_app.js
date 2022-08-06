<<<<<<< HEAD
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme css
import "../styles/globals.css";
import "../styles/utilities.css";
import "../styles/DialogDemo.css";
=======
import "primereact/resources/primereact.min.css"                //core css
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import "primereact/resources/themes/md-light-indigo/theme.css"   
import '../styles/theme.css'      
import '../styles/globals.css'
import '../styles/utilities.css'
>>>>>>> 40891624864b4c9db61b4eae4c59f4e33042d6e6

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
