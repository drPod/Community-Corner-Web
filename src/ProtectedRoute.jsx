import { useNavigate } from "react-router-dom";
import { useUser } from "./api/useUser";
import { useEffect } from "react";
import Loader from "./ui/Loader";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
