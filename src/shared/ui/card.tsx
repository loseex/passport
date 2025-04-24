import { cn } from "@/app/lib/utils";
import React from "react";

type Props = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export const CardHeader: React.FC = (): React.ReactElement => {
  return (
    <div className="px-6 pt-6 flex flex-row items-center justify-start">
      <a href="/" className="flex flex-row gap-1.5 justify-center items-center">
        <img src="favicon.svg" alt="Logotype" />
        <h6 className="text-xl font-semibold">Passport</h6>
      </a>
      <svg
        className="mx-3 select-none pointer-events-none"
        width="1"
        height="31"
        viewBox="0 0 1 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1" height="31" fill="gray"></rect>
      </svg>
      <p className="mb-0 text-sm/4 text-muted-foreground max-w-1/3 select-none pointer-events-none">
        Единый аккаунт для одной экосистемы
      </p>
    </div>
  );
};

export const CardFooter: React.FC = (): React.ReactElement => {
  return (
    <p className="text-sm text-muted-foreground mt-5">
      Есть проблемы?{" "}
      <a
        className="text-black font-medium hover:underline"
        href="https://t.me/loseex"
      >
        Тех. Поддержка
      </a>
    </p>
  );
};

export const CardTitle: React.FC<Omit<Props, "className" | "children">> = ({
  title,
}): React.ReactElement => {
  return <h5 className="" children={title} />;
};

export const CardBody: React.FC<Omit<Props, "className">> = ({
  title,
  children,
}): React.ReactElement => {
  return (
    <div className="pt-4 px-6 pb-6">
      {title && <CardTitle title={title} />}
      {children}
      <CardFooter />
    </div>
  );
};

export const Card: React.FC<Props> = ({
  className,
  ...props
}): React.ReactElement => {
  return (
    <div
      className={cn(
        "w-full min-h-fit max-w-[480px] bg-background rounded-xl",
        className
      )}
    >
      <CardHeader />
      <CardBody {...props} />
    </div>
  );
};
