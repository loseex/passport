import React from "react";

export type Route = {
  path: string;
  element: React.ReactNode;
};

export type Routes = {
  [key: string]: Route;
};
