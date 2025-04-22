import { BrowserRouter } from "react-router";

const Config = {
  basename: "/",
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

export const withReactRouter = (component: () => React.ReactNode) => () => {
  return <BrowserRouter children={component()} {...Config} />;
};
