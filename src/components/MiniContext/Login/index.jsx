import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Getting setUser from UserContext
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending data to UserContext
    setUser({ username, password });
  };

  return (
    <>
      <h2> Login </h2>
      <input
        className="text-black ml-4"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="text-black m-4"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-2 py-1 border-spacing-1 bg-blue-600 hover:bg-blue-400 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}

export default Login;
