import { routes } from "@/app/router";
import { Route, Routes } from "react-router";

export const AppRouting: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      {Object.values(routes).map((el) => (
        <Route {...el} />
      ))}
    </Routes>
  );
};
