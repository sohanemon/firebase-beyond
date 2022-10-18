import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

import { useContext } from "react";
import { UserContext } from "../../pages/_app";
import { app } from "../firebase/init";
const auth = getAuth(app);
const GoogleLoginButton = ({ uid }) => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = async () => {
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = async () => {
    signInWithPopup(auth, githubProvider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    <div>
      {uid ? null : (
        <div className='relative py-16 bg-gradient-to-br from-sky-50 to-gray-200'>
          <div className='relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
            <div className='m-auto md:w-8/12 lg:w-6/12 xl:w-6/12'>
              <div className='rounded-xl bg-white shadow-xl'>
                <div className='p-6 sm:p-16'>
                  <div className='space-y-4 flex flex-col items-center text-center'>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/1818/1818405.png'
                      loading='lazy'
                      className='w-10'
                      alt='tailus logo'
                    />
                    <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>
                      Please sign in.
                    </h2>
                  </div>
                  <div className='mt-16 grid space-y-4'>
                    <button
                      onClick={handleGoogleSignIn}
                      className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
                    >
                      <div className='relative flex items-center space-x-4 justify-center'>
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/300/300221.png'
                          className='absolute left-0 w-5'
                          alt='google logo'
                        />
                        <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                          Continue with Google
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={handleGithubSignIn}
                      className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
                    >
                      <div className='relative flex items-center space-x-4 justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          className='absolute left-0 w-5 text-gray-700'
                          viewBox='0 0 16 16'
                        >
                          <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                        </svg>
                        <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                          Continue with Github
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => router.push("signin")}
                      className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                               hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
                    >
                      <div className='relative flex items-center space-x-4 justify-center'>
                        <img
                          src='https://cdn-icons-png.flaticon.com/512/542/542638.png'
                          alt=''
                          className='absolute left-0 w-5'
                        />
                        <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                          Continue with Email
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { auth };
export default GoogleLoginButton;
