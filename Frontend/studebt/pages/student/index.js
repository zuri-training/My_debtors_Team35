import Layout from "../../components/layout";
import PageLayout from "../../components/page-layout";
import MainNav from "../../components/student/MainNav";
import Hero from "../../components/student/Hero";

export default function Profile() {
  return (
    <section className="container">
      <MainNav />
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
