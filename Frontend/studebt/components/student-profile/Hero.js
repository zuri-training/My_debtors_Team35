import { useState, useEffect  } from "react";
import Image from "next/image";
import profilePics from "../../public/assets/images/profile-pics.png";
import { getStudentProfile } from "../../services/profileService";
import NProgress from 'nprogress'

export default function Hero(props) {

  const [studentProfile, setStudentProfile] = useState({});

  useEffect(() => {
    NProgress.start();
    getStudentProfile().then(data => {
      setStudentProfile(data.user);
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }).finally(() => {
      NProgress.done();
    } )
  }, []);


  return (
    <div className="main-hero col-12">
      <h4 className="heading md:mb-5 mb-3 xl:text-3xl text-2xl">Student Profile</h4>
      <div className="profile grid xl:p-5 lg:p-4 md:p-3">
        <div className="col-2">
          <Image src={profilePics} alt="Profile Picture" layout="responsive" />
        </div>
        <div className="col-10 flex flex-column justify-content-center">
          <h5 className="subheading md:mb-4 mb-2 md:text-xl text-lg text-left ">
            Basic Information
          </h5>
          <div className="grid sm:px-0 px-2">
            <p className="sm:col-3 col-4 xl:text-base lg:text-sm text-xs">
              <span className="gray">First Name:</span>{" "}
              <strong>{ studentProfile.first_name }</strong>
            </p>
            <p className="sm:col-3 col-4 xl:text-base lg:text-sm text-xs">
              <span className="gray">Last Name:</span> <strong>{ studentProfile.last_name }</strong>
            </p>
            <p className="sm:col-3 col-4 xl:text-base lg:text-sm text-xs">
              <span className="gray">Middle Name:</span>
              <strong>{ studentProfile.middle_name }</strong>
            </p>
            <p className="sm:col-3 col-6 xl:text-base lg:text-sm text-xs">
              <span className="gray">Student ID:</span>{" "}
              <strong>{ studentProfile.student_government_id }</strong>
            </p>
            <p className="sm:col-3 col-6 xl:text-base lg:text-sm text-xs">
              <span className="gray">D.O.B:</span> <strong>{ studentProfile.dob }</strong>
            </p>
            <p className="sm:col-3 col-12 xl:text-base lg:text-sm text-xs">
              <span className="gray">Previous School:</span>
              <strong>Ezekiel College</strong>
            </p>
            <p className="sm:col-3 col-8 xl:text-base lg:text-sm text-xs">
              <span className="gray">Contact Number:</span>
              <strong>{ studentProfile.contact}</strong>
            </p>
            <p className="sm:col-3 col-4 xl:text-base lg:text-sm text-xs">
              <span className="gray">Sex:</span> <strong>Male</strong>
            </p>
            <p className="sm:col-6 col-12 xl:text-base lg:text-sm text-xs">
              <span className="gray">Home Address:</span>{" "}
              <strong>37 Jacob Banks Close, Ilupeju, Lagos, Nigeria</strong>
            </p>
            <p className="sm:col-6 col-12 xl:text-base lg:text-sm text-xs">
              <span className="gray">Email:</span>{" "}
              <strong>{ studentProfile.email }</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
