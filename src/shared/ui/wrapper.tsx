import { cn } from "@/app/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Wrapper: React.FC<Props> = ({
  className,
  children,
}): React.ReactElement => {
  return (
    <div
      className={cn("w-full min-h-fit py-7 [&>*]:mx-auto", className)}
      children={children}
    />
  );
};
