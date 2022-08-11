import Layout from "../../components/layout";
import PageLayout from "../../components/page-layout";
import MainNav from "../../components/student-profile/MainNav";
import Main from "../../components/student-profile/Main";
import Hero from "../../components/student-profile/Hero";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export default function Profile() {
  return (
    <section className="container">
      <MainNav />
      <Main />
    </section>
  );
}

// Profile.getLayout = function getLayout(page) {
//   return (
//     <Layout title="Student Dashboard">
//       <PageLayout>{page}</PageLayout>
//     </Layout>
//   );
// };

