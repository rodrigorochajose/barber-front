import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ClientDashboard from '../features/client/dashboard/ClientDashboard';
import BarberDashboard from '../features/barber/dashboard/BarberDashboard';
import RequireRole from '../features/auth/RequireRole';
import DefaultRedirect from '../features/auth/DefaultRedirect';
import AuthPage from '../features/auth/AuthPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultRedirect />} />

        <Route path="/login" element={<AuthPage />} />

        {/* Rotas do cliente */}
        <Route
          path="/client/dashboard"
          element={
            <RequireRole role="client">
              <ClientDashboard />
            </RequireRole>
          }
        />

        {/* Rotas do barbeiro */}
        <Route
          path="/barber/dashboard"
          element={
            <RequireRole role="barber">
              <BarberDashboard />
            </RequireRole>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
