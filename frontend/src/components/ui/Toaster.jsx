// import { useTheme } from "next-themes";
// import { Toaster as Sonner, toast } from "sonner";

// const Toaster = ({ ...props }) => {
//   const { theme = "system" } = useTheme();

//   return (
//     <Sonner
//       theme={theme}
//       className="toaster group"
//       toastOptions={{
//         classNames: {
//           toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
//           description: "group-[.toast]:text-muted-foreground",
//           actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
//           cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
//         },
//       }}
//       {...props}
//     />
//   );
// };

// export { Toaster, toast };


import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/Toast";

export function Toaster() {
  const { toasts } = { toasts: [] }; // Placeholder: Replace with useToast hook

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}