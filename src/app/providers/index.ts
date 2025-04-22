import compose from "compose-function";
import { withQueryClient } from "./with-query-client";

export const withProviders = compose<React.FC>(withQueryClient);
