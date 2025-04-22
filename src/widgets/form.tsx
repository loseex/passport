import { ReactNode } from "react";
import {
  SubmitHandler,
  useFormContext,
  FieldValues,
  UseFormReturn,
  UseControllerProps,
  ControllerRenderProps,
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem as FormItemComponent,
  FormLabel,
} from "@/shared/ui/form";
import { cn } from "@/app/lib/utils";

interface FormWrapperProps<T extends FieldValues> {
  className?: string;
  children: ReactNode;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export const FormWrapper = <T extends FieldValues>({
  children,
  className = "",
  form,
  onSubmit,
}: FormWrapperProps<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className)}>
        {children}
      </form>
    </Form>
  );
};

interface FormItemProps {
  name: string;
  label?: string;
  rules?: UseControllerProps["rules"];
  description?: string;
  hidden?: boolean;
  render: (
    field: ControllerRenderProps<FieldValues, string>
  ) => React.ReactNode;
}

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  hidden = false,
  description,
  render,
  rules,
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      rules={rules}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItemComponent hidden={hidden}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{render(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
        </FormItemComponent>
      )}
    />
  );
};
