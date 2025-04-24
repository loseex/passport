import React from "react";
import { withProviders } from "@/app/providers";
import { Wrapper } from "@/shared/ui/wrapper";
import { Card } from "@/shared/ui/card";
import { ServerCrash } from "lucide-react";

const NotAvailableApplication: React.FC = withProviders(
  (): React.ReactElement => {
    return (
      <Wrapper>
        <Card>
          <div className="w-full min-h-fit flex flex-col justify-center items-center py-4">
            <ServerCrash className="size-12 text-muted-foreground mb-3" />
            <h5 className="text-2xl font-bold mb-1.5">Ошибка загрузки</h5>
            <p className="text-sm/4 text-muted-foreground text-center">
              На данный момент сервис недоступен.
            </p>
          </div>
        </Card>
      </Wrapper>
    );
  }
);

export default NotAvailableApplication;
