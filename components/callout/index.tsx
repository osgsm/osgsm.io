import type { LucideProps } from "lucide-react";
import type {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";

import { cn } from "@/lib/cn";

import {
  AlertTriangle,
  Info,
  Lightbulb,
  MessageCircleWarning,
  OctagonAlert,
} from "lucide-react";

type CalloutType = "note" | "tip" | "important" | "warning" | "caution";

interface CalloutProps {
  type?: CalloutType;
  heading?: string;
  children: ReactNode;
}

const calloutVariants: Record<
  CalloutType,
  {
    className: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }
> = {
  note: {
    className: "bg-[--blue-2] border-[--blue-3] text-[--blue-8]",
    icon: Info,
  },
  tip: {
    className: "bg-[--teal-2] border-[--teal-3] text-[--teal-8]",
    icon: Lightbulb,
  },
  important: {
    className: "bg-[--purple-2] border-[--purple-3] text-[--purple-8]",
    icon: MessageCircleWarning,
  },
  warning: {
    className: "bg-[--amber-2] border-[--amber-3] text-[--amber-8]",
    icon: AlertTriangle,
  },
  caution: {
    className: "bg-[--pink-2] border-[--pink-3] text-[--pink-8]",
    icon: OctagonAlert,
  },
};

export const Callout = ({ type = "note", heading, children }: CalloutProps) => {
  const Icon = calloutVariants[type].icon;
  return (
    <div
      className={cn(
        "mt-6 rounded-md border p-4",
        calloutVariants[type].className,
      )}
    >
      <h3 className="~text-sm/base pb-3 text-inherit leading-none">
        <span className="flex items-center gap-1.5">
          <Icon size={16} />
          {heading ? (
            <span>{heading}</span>
          ) : (
            <span className="capitalize">{type}</span>
          )}
        </span>
      </h3>
      <div className="text-foreground leading-relaxed *:mt-0 [&_*+*]:mt-2 [&_figure]:border-0 [&_figure]:bg-transparent [&_pre]:p-0 [&_pre_[data-line]]:p-0">
        {children}
      </div>
    </div>
  );
};
