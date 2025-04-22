import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({});

export const withQueryClient = (component: () => React.ReactNode) => () => {
  return <QueryClientProvider client={queryClient} children={component()} />;
};
