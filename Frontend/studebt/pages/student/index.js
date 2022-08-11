import Layout from "../../components/layout";
import PageLayout from "../../components/page-layout";
import MainNav from "../../components/student-profile/MainNav";
import Main from "../../components/student-profile/Main";
import Hero from "../../components/student-profile/Hero";

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

export const getServerSideProps = ({ req, res }) => {
  const cookies = req.headers.cookie;
    let is_authenticated = false;

    if (cookies) {
        const parsedCookies = cookies.split(';').map(cookie => cookie.split('='));
        const parsedCookiesObj = {};
        parsedCookies.forEach(cookie => {
            parsedCookiesObj[cookie[0].trim()] = cookie[1];
        });
        if (parsedCookiesObj.token) {
            is_authenticated = true;
        }
    }
    
  if (!is_authenticated) {
      return {
        redirect: {
          destination: '/login/student',
          permanent: false,
        },
      }
    }

  return {
      props: {
          is_authenticated
      }
  }

}