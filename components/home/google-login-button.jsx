import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../pages";
import { app } from "../firebase/init";
const GoogleLoginButton = ({ uid }) => {
  const { setUser } = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);
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
      {uid ? (
        <button onClick={handleSignOut} className='btn btn-accent'>
          Logout
        </button>
      ) : (
        <>
          {" "}
          <button onClick={handleGoogleSignIn} className='btn btn-secondary'>
            Continue with Google
          </button>
          <button onClick={handleGithubSignIn} className='btn btn-secondary'>
            Continue with Google
          </button>
        </>
      )}
    </div>
  );
};

export default GoogleLoginButton;
