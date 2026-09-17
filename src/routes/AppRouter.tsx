import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import StageDetail from '../pages/StageDetail';
import Lesson from '../pages/Lesson';
import { ROUTES } from '../services/routeService';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path="learn/python/stage/:stageId" element={<StageDetail />} />
          <Route path="learn/python/stage/:stageId/lesson/:lessonId" element={<Lesson />} />

          {/* Legacy Redirects */}
          <Route path="dashboard" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
          <Route path="topics" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
          <Route path="topics/:stageId" element={<Navigate to={ROUTES.DASHBOARD_REDIRECT} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
