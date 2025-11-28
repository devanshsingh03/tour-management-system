import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (!token || role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
