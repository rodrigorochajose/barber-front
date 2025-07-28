import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

interface RequireRoleProps {
  role: 'client' | 'barber';
  children: React.ReactNode;
}

export default function RequireRole({ role, children }: RequireRoleProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== role) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  return <>{children}</>;
}
