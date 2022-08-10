import { Menubar } from "primereact/menubar";
import Image from "next/image";
import profilePics from "../../public/assets/images/profile-pics.png";
import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import bell from "../../public/assets/images/notification.png";

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

export default function OtherNav(props) {
  const menu = <MenuDropdown />;

  const menuNav = (
    <div className="flex justify-content-end align-items-center md:gap-4 gap-2">
      <div className="flex justify-content-center align-items-center max-w-3rem md:w-auto w-2rem">
        <Image src={bell} alt="Bell Icon" />
      </div>
      <div className="flex justify-content-center align-items-center max-w-3rem md:w-auto w-2rem">
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
