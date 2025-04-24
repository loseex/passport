import React from "react";
import { withProviders } from "@/app/providers";
import { AppRouting } from "@/pages";

const Application: React.FC = withProviders((): React.ReactElement => {
  return <AppRouting />;
});

export default Application;
