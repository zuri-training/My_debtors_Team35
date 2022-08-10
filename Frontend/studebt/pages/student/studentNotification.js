import { Card } from "primereact/card";

export default function studentNotification(props) {
  return (
    <section className="container sm:px-5">
      <div className="grid">
        <nav className="col-12 flex sm:justify-content-between align-items-center my-5">
          <i className="pi pi-arrow-left sm:hidden subheading"></i>
          <h5 className="subheading md:text-xl text-lg sm:mx-0 mx-auto">
            Notifications
          </h5>
          <h6 className="subheading lg:text-sm text-xs sm:inline-block hidden">
            Back to Profile
          </h6>
        </nav>
        <main className="col-12 flex flex-column gap-3">
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-comments md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Lawal Owoseni replied to your comment
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-pencil md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Omolara Boluwaduro contended a debt
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-trash md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                You removed Lawal Owoseni from your list of debtors
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-key md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Your password was successfully reset
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-book md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Your stuDebt information has been updated successfully
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-pencil md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Abdullahi Mustafa contended a debt
              </p>
            </div>
          </Card>
          <Card className="col-12 bg-lpurple">
            <div className="flex justify-content-start align-items-center gap-3">
              <i className="pi pi-comments md:text-4xl text-2xl subheading"></i>
              <p className="xl:text-base lg:text-sm text-xs">
                Tola Model College replied to your comment
              </p>
            </div>
          </Card>
        </main>
      </div>
    </section>
  );
}
