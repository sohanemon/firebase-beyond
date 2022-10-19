import { useContext, useEffect, useState } from "react";
import { auth } from "../components/home/google-login-button";
import { UserContext } from "./_app";
import { updateProfile } from "firebase/auth";
import { useRouter } from "next/router";

const Update = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [name, setName] = useState();
  const [photoURL, setPhotoURL] = useState();
  useEffect(() => {
    setName(user.displayName);
    setPhotoURL(user.photoURL);
    return () => {};
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("updated");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("first");
  };

  return (
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
                  Update profile
                </h2>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-gray-700'>
                      Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type='name'
                      name='name'
                      id='name'
                      className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400'
                      value={name}
                    />
                  </div>
                  <div>
                    <div className='flex items-center justify-between'>
                      <label htmlFor='photoURL' className='text-gray-700'>
                        Avatar Link
                      </label>
                    </div>
                    <input
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      type='photoURL'
                      name='photoURL'
                      id='photoURL'
                      className='block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                  focus:ring-2 focus:ring-sky-300 focus:outline-none
                                  invalid:ring-2 invalid:ring-red-400'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full py-3 px-6 rounded-md bg-sky-600
                              focus:bg-sky-700 active:bg-sky-500'
                  >
                    <span className='text-white'>Update</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
