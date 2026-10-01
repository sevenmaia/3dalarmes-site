import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "navy" | "glass" | "bordered";
  hoverEffect?: boolean;
}

export function Card({
  children,
  variant = "white",
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  const variantStyles = {
    white: "bg-white text-navy-950 border border-gray-100 shadow-card",
    navy: "bg-navy-900 text-white border border-navy-800 shadow-dark-card",
    glass: "bg-navy-900/60 backdrop-blur-md text-white border border-white/10 shadow-dark-card",
    bordered: "bg-transparent text-navy-950 border border-gray-200",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
