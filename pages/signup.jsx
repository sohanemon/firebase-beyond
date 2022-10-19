import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { auth } from "../components/home/google-login-button";
import { UserContext } from "./_app";
import Link from "next/link";
import sliceFirebaseError from "../util/slice-error";

const Mail = () => {
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (user.uid) {
      router.push("/");
      return;
    }

    return () => {};
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const form = ["email", "password"];
    const data = {};
    form.forEach((el) => (data[el] = e.target[el].value));
    if (!/(?=.*[A-Z].*[A-Z])/.test(data.password)) {
      // bracket is important inside note:
      setMessage("Please use at least one uppercase.");
      console.log("first");
      return;
    }
    if (!/(?=(.*[0-9]){1,})/.test(data.password)) {
      setMessage("Please use some digits.");
      return;
    }
    if (!/(?=(.*[!@#$%^&*()\-__+.]){1,})/.test(data.password)) {
      setMessage("Please use symbols like !,@,#,c,$.");
      return;
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        setUser(user);
        sendEmailVerification(auth.currentUser).then(() => {
          console.info("Verification email send.");
        });
        router.push("/");
      })
      .catch((error) => {
        setMessage(sliceFirebaseError(error));
      });

    e.preventDefault();
  };

  return (
    !user.uid && (
      <>
        <div
          className='relative py-16
          before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200'
        >
          <div className='relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40'>
            <div className='m-auto space-y-8 md:w-8/12 lg:'>
              <div className='rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl'>
                <div className='p-6 sm:p-16'>
                  <h2 className='mb-8 text-2xl text-cyan-900 font-bold'>
                    Register account
                  </h2>
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
                    </div>{" "}
                    <p className='text-red-400 capitalize'>{message}</p>
                    <button
                      type='submit'
                      className='w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500'
                    >
                      <span className='text-white'>Continue</span>
                    </button>{" "}
                    <p>
                      Already have an account?{" "}
                      <Link href='signin'>
                        <a className='text-blue-500 hover:underline'>
                          Login now
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
    )
  );
};

export default Mail;
