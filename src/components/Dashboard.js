import { isLogin } from "../utils";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";

const Dashboard = () => {
  const navigate = useNavigate();
  console.log(isLogin());

  return isLogin() === false ? (
    navigate("/register")
  ) : (
    <>
      <Login />
      <div>Dashboard</div>
    </>
  );
};
export default Dashboard;
