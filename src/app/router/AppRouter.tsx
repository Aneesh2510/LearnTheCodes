import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ForgotPassword from '../../pages/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword';
import Dashboard from '../../pages/Dashboard';
import StageDetail from '../../pages/StageDetail';
import Lesson from '../../pages/Lesson';
import ProtectedRoute from '../router/ProtectedRoute';
import { ROUTES } from '../../services/routeService';

/** Canonical application routing composition. */
export default function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.STAGE_DETAIL.slice(1)} element={<StageDetail />} />
            <Route path={ROUTES.LESSON.slice(1)} element={<Lesson />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
