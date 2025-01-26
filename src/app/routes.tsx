import "./App.styles";
import { Route, Routes as AppRoutes, Navigate } from "react-router-dom";
import Menu from "src/pages/menu";

const routes = [
  { path: "/menu", component: Menu },
  { path: "/access", component: Menu }, // TODO: Access page
  { path: "/contact", component: Menu }, // TODO: contact page
];

const Routes = () => {
  return (
    <AppRoutes>
      {routes?.map(({ path, component: Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" element={<Navigate to="/menu" replace />} />
    </AppRoutes>
  );
};

export default Routes;
