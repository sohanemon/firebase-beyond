import { sendEmailVerification } from "firebase/auth";
import { auth } from "./home/google-login-button";
const Toast = () => {
  return (
    <>
      <div className='m-5 fixed'>
        <div
          className='max-w-xs bg-red-600 text-sm text-white rounded-md shadow-lg  mb-3 ml-3'
          role='alert'
        >
          <div className='flex p-4 shadow-lg'>
            Check your inbox to verify email or{" "}
            <button
              onClick={handleResend}
              className='font-semibold pl-2 cursor-pointer text-blue-400 hover:to-blue-500 '
            >
              {" "}
              resend?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
const handleResend = async () => {
  sendEmailVerification(auth.currentUser).then(() => {
    alert("Send!");
  });
};
