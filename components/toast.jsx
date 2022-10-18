const Toast = () => {
  return (
    <>
      <div className='m-5 fixed'>
        <div
          className='max-w-xs bg-red-600 text-sm text-white rounded-md shadow-lg  mb-3 ml-3'
          role='alert'
        >
          <div className='flex p-4 shadow-lg'>
            Please check your inbox to verify email.
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
