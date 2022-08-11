import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState, useRef } from "react";
import { Avatar } from "primereact/avatar";
import Image from "next/image";
import profilePics from "../../public/assets/images/profile-pics.png";
import menuIcon from "../../public/assets/images/Menu-icon.svg";
import bell from "../../public/assets/images/notification.png";
import plus from "../../public/assets/images/plus.png";

const MenuDropdown = () => {
  const menu = useRef(null);
  const items = [
    {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
        },
        {
          label: "About Us",
          icon: "pi pi-hashtag",
        },
      ],
    },
  ];

  return (
    <div>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button
        label="Menu"
        icon="pi pi-bars"
        className="p-button-text p-button-lg"
        onClick={(event) => menu.current.toggle(event)}
        aria-controls="popup_menu"
        aria-haspopup
      />
    </div>
  );
};

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <span className="p-input-icon-left md:mx-4 sm:mx-2">
        <i className="pi pi-search" />
        <InputText
          className="nav-search border-none lg:w-30rem md:w-20rem w-11rem"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
        />
      </span>
    </div>
  );
};

export default function MainNav(props) {
  const menu = <MenuDropdown />;

  const menuNav = (
    <div className="flex justify-content-end align-items-center md:gap-4 gap-2">
      <div className="flex justify-content-center align-items-center">
        <SearchBar />
      </div>
      {/* <Avatar icon="pi pi-plus" className="nav-plus" /> */}
      <div className="flex justify-content-center align-items-center max-w-3rem md:w-auto w-1">
        <Image src={plus} alt="Plus Icon" />
      </div>
      <div className="flex justify-content-center align-items-center max-w-3rem md:w-auto w-1">
        <Image src={bell} alt="Bell Icon" />
      </div>
      <div className="flex justify-content-center align-items-center max-w-3rem md:w-auto w-1">
        <Image src={profilePics} alt="Profile" />
      </div>
    </div>
  );

  return (
    <nav>
      <Menubar className="border-none" start={menu} end={menuNav} />
    </nav>
  );
}
