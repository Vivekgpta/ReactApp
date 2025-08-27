import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Private({ children }) {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
