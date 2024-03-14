import UserContextProvider from "../../context/UserContextProvider";
import Login from "./Login";
import Profile from "./Profile";

function MiniContext() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default MiniContext;
