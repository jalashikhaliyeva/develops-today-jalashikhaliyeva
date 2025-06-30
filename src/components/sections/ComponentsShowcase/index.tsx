import { FormDemo } from "@/components/demos/FormDemo";
import { ToastDemo } from "@/components/demos/ToastDemo";

export const ComponentsShowcase: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <FormDemo />
      <ToastDemo />
    </section>
  );
};
