import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
  const { isManager } = useSelector((state) => state.auth);

  return isManager ? children : <Navigate to="/" />;
};
