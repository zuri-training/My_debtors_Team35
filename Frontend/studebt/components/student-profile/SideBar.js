import { Button } from "primereact/button";

export default function SideBar(props) {
  return (
    <div className="main-sidebar md:col-2 col-1 flex flex-column justify-content-between md:align-items-start align-items-center py-8 md:mx-auto mx-2">
      <div className="flex flex-column">
        <Button
          label="Profile"
          icon="pi pi-users"
          className="p-button-rounded p-button-lg my-1"
          id="profile-btn"
        />
        <Button
          label="Appeals"
          icon="pi pi-user-edit"
          className="p-button-text p-button-plain my-1"
        />
      </div>
      <div className="flex flex-column">
        <Button
          label="Settings"
          icon="pi pi-cog"
          className="p-button-text p-button-plain my-1"
        />
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          className="p-button-text p-button-plain my-1"
        />
      </div>
    </div>
  );
}
