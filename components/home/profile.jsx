const Profile = ({ displayName, photoURL, email }) => {
  return (
    <section
      style={{ fontFamily: "Montserrat" }}
      className='  flex font-medium items-center justify-center h-screen'
    >
      <section className='w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-400 text-sm'>2d ago</span>
          <span className='text-emerald-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              />
            </svg>
          </span>
        </div>
        <div className='mt-6 w-fit mx-auto'>
          <img
            src={photoURL}
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
  );
};

export default Profile;
