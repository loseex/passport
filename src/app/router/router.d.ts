export type Route = {
  path: string;
  element: React.FC;
};

export type Routes = {
  [key: string]: Route;
};
