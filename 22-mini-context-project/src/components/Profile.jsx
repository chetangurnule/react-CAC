import { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext);
  return (
    <>
      <h3>This is a Profile Section</h3>
      {user ? (
        <div>
          <h4> username : {user.userName}</h4>
          <h4> password : {user.password}</h4>
        </div>
      ) : (
        <div>Please Login</div>
      )}
    </>
  );
}

export default Profile;
