import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { auth } from "../components/home/google-login-button";
import sliceFirebaseError from "../util/slice-error";
import { UserContext } from "./_app";
const Signin = () => {
  const router = useRouter();

  const [message, setMessage] = useState(null);
  const { setUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    setMessage(null);
    const form = ["email", "password"];
    const data = {};
    form.forEach((el) => (data[el] = e.target[el].value));
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        setUser(user);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setMessage(sliceFirebaseError(error));

        const errorMessage = error.message;
      });
    e.preventDefault();
  };

  return (
    <>
      {" "}
      <div
        className='relative py-16
          before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200'
      >
        <div className='relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
          <div className='m-auto space-y-8 md:w-8/12 lg:'>
            <div className='rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl'>
              <div className='p-6 sm:p-16'>
                <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>Login</h2>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-gray-700'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                        focus:ring-2 focus:ring-sky-300 focus:outline-none
                        invalid:ring-2 invalid:ring-red-400'
                    />
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='password' className='text-gray-700'>
                        Password
                      </label>
                    </div>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                  focus:ring-2 focus:ring-sky-300 focus:outline-none
                                  invalid:ring-2 invalid:ring-red-400'
                    />
                  </div>
                  <p className='text-red-400 capitalize'>{message}</p>
                  <button
                    type='submit'
                    className='w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500'
                  >
                    <span className='text-white'>Continue</span>
                  </button>
                  <button
                    onClick={() => console.log(auth.currentUser)}
                    type='submit'
                    className='w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500'
                  >
                    <span className='text-white'>Contsffinue</span>
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link href='signup'>
                      <a className='text-blue-500 hover:underline'>
                        Register now
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
