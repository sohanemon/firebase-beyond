import { useContext } from "react";
import { UserContext } from "../../pages";
import GoogleLoginButton from "./google-login-button";
import Profile from "./profile";

const Index = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <GoogleLoginButton uid={user?.uid} />
      {user?.uid && <Profile {...user} />}
    </>
  );
};

export default Index;
