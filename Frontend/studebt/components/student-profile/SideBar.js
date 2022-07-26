import { Button } from "primereact/button";
import Link from "next/link"
import { useState } from "react"
import { logout } from "../../services/authService"
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { deleteCookie } from 'cookies-next';

export default function SideBar(props) {

  const router = useRouter();
  const handleLogout = async (e) => {
    e.preventDefault();
    NProgress.start();

    await logout().then(response => {
      console.log(response);
    }).catch(error => {
      alert(error)

    }).finally(() => {
      // delete cookie
      deleteCookie('token');
      router.push('/');
      NProgress.done();

    })
  }

  return (
    <div className="main-sidebar md:col-2 col-1 flex flex-column justify-content-between md:align-items-start align-items-center py-8 md:mx-auto mx-2">
      <div className="flex flex-column">
        <Link href=''>
        <Button
          label="Profile"
          icon="pi pi-users"
          className="p-button-rounded p-button-lg my-1"
          id="profile-btn"
        />
        </Link>
        <Link href='/school/dashboard'>
        <Button
          label="Appeals"
          icon="pi pi-user-edit"
          className="p-button-text p-button-plain my-1"
        />
        </Link>
      </div>
      <div className="flex flex-column">
        <Link href='/school/students'>
        <Button
          label="Settings"
          icon="pi pi-cog"
          className="p-button-text p-button-plain my-1"
        />
        </Link>
        <Link href=''>
          <a
            onClick={handleLogout}
            className="side-bar-menu-item">
            <img src="/images/logout.svg" alt="" />
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
}
