import { useParams } from "react-router-dom";

function UserInfo() {
  const { userId } = useParams();
  return (
    <h1 className="text-4xl text-center m-4 font-bold text-white mb-4">
      User Info: {userId}
    </h1>
  );
}

export default UserInfo;
