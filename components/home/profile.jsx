import { auth } from "./google-login-button";
import { signOut } from "firebase/auth";
import { UserContext } from "../../pages/_app";
import { useContext } from "react";
import Toast from "../toast";
import { useRouter } from "next/router";

const Profile = ({ displayName, photoURL, email, emailVerified }) => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {!emailVerified && <Toast />}

      <section
        style={{ fontFamily: "Montserrat" }}
        className='  flex font-medium items-center justify-center h-screen shadow-xl'
      >
        <section className='w-64 mx-auto bg-gray-900 rounded-2xl px-8 py-6 shadow-lg'>
          <div className='flex items-center justify-between'>
            <span
              onClick={() => router.push("/update")}
              className='text-gray-400 text-sm font-mono cursor-pointer hover:text-gray-200'
            >
              Update profile
            </span>
            <span className='text-emerald-400'>
              <svg
                onClick={handleSignOut}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 cursor-pointer'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
            </span>
          </div>
          <div className='mt-6 w-fit mx-auto'>
            <img
              src={
                photoURL ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg"
              }
              className='rounded-full w-28 '
              alt='profile picture'
            />
          </div>
          <div className='mt-8 '>
            <h2 className='text-white text-center font-bold text-2xl tracking-wide'>
              {displayName}
            </h2>
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
