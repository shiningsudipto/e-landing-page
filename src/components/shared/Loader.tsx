import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="lg:size-14 size-8 animate-spin text-accent" />
    </div>
  );
};

export default Loader;
