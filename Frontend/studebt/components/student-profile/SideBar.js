import { Button } from "primereact/button";

export default function SideBar(props) {
  return (
    <div className="main-sidebar lg:col-2 col-12 flex lg:flex-column justify-content-between align-items-start lg:py-8 py-5 lg:px-0 px-5">
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
