import stuDeptLogo from "../../public/studebt-logo.png";
import check from "../../public/assets/images/check.png";
import Image from "next/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function commentSuccess(props) {
  return (
    <section className="h-screen">
      <nav className="w-8rem ml-8 mt-5">
        <Image src={stuDeptLogo} />
      </nav>
      <div className="flex justify-content-center align-items-center h-full">
        <Card className="lg:w-8 md:30rem w-10 shadow-6">
          <div className="flex flex-column justify-content-center align-items-center md:py-4">
            <div className="md:w-5rem w-3rem my-4">
              <Image src={check} />
            </div>
            <p className="dark-gray md:w-5 text-center my-4">
              Your contention has been taken, the school will respond shortly.
            </p>
            <Button label="Back to Profile" icon="pi pi-arrow-left" className="pri-btn" />
          </div>
        </Card>
      </div>
    </section>
  );
}
