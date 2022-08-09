import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import Image from "next/image";
import profilePics from "../../public/assets/images/profile-pics.png";
import menuIcon from "../../public/assets/images/Menu-icon.svg";
import bell from "../../public/assets/images/notification.png";
import plus from "../../public/assets/images/plus.png";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <span className="p-input-icon-left lg:inline-block hidden">
        <i className="pi pi-search" />
        <InputText
          className="nav-search border-none mr-4 lg:w-30rem w-20rem"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </span>
    </div>
  );
};

export default function MainNav(props) {
  const menu = (
    <div className="flex align-items-center gap-2 p-2">
      <Image src={menuIcon} alt="Menu Icon" />
      <span className="nav-menu sm:text-2xl text-lg">Menu</span>
    </div>
  );

  const menuNav = (
    <div className="flex align-items-center gap-4">
      <SearchBar />
      {/* <Avatar icon="pi pi-plus" className="nav-plus" /> */}
      <Image src={plus} width={50} height={50} />
      <Image src={bell} />
      <Image src={profilePics} width={50} height={50} alt="Profile" />
    </div>
  );

  return (
    <nav>
      <Menubar className="border-none" start={menu} end={menuNav} />
    </nav>
  );
}
