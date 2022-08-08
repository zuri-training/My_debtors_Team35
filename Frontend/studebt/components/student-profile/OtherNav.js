import { Menubar } from "primereact/menubar";
import Image from "next/image";
import profilePics from "../../public/assets/images/profile-pics.png";
import menuIcon from "../../public/assets/images/Menu-icon.svg";
import bell from "../../public/assets/images/notification.png";
import plus from "../../public/assets/images/plus.png";

export default function OtherNav(props) {
  const menu = (
    <div className="flex align-items-center gap-2 p-2">
      <Image src={menuIcon} alt="Menu Icon" />
      <span className="nav-menu sm:text-2xl text-lg md:inline-block hidden">
        Menu
      </span>
    </div>
  );

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
