import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import StageDetail from '../../pages/StageDetail';
import Lesson from '../../pages/Lesson';
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
          <Route path={ROUTES.STAGE_DETAIL.slice(1)} element={<StageDetail />} />
          <Route path={ROUTES.LESSON.slice(1)} element={<Lesson />} />
          <Route path="dashboard" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
          <Route path="topics" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
          <Route path="topics/:stageId" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
