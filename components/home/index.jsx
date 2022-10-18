import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState, useTransition } from "react";
import { UserContext } from "../../pages/_app";
import GoogleLoginButton, { auth } from "./google-login-button";
import Profile from "./profile";

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  const [render, setRender] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setRender(true);
      } else {
        setRender(true);
      }
    });

    return () => {};
  }, []);
  console.log(user);
  return (
    <>
      <div>
        {render && (
          <>
            <GoogleLoginButton uid={user?.uid} />
            <>{user?.uid && <Profile {...user} />}</>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
