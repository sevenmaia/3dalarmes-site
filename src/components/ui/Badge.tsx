import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "navy" | "outline" | "white";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "blue",
  className,
  icon,
}: BadgeProps) {
  const variantStyles = {
    yellow: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    blue: "bg-blue-600/10 text-blue-600 border border-blue-600/20",
    navy: "bg-navy-900/80 text-blue-400 border border-blue-500/20",
    outline: "bg-transparent text-gray-300 border border-white/20",
    white: "bg-white text-navy-950 font-bold shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
