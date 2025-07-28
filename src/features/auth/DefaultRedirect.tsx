import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export default function DefaultRedirect() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'client') {
    return <Navigate to="/client/dashboard" replace />;
  }

  if (user.role === 'barber') {
    return <Navigate to="/barber/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
}
