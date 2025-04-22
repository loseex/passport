import compose from "compose-function";
import { withQueryClient } from "./with-query-client";
import { withReactRouter } from "./with-react-router";

export const withProviders = compose<React.FC>(
  withQueryClient,
  withReactRouter
);
