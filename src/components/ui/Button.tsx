import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "whatsapp" | "outline-white" | "outline-blue" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal = false,
      icon,
      iconPosition = "right",
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5 h-9",
      md: "text-sm px-6 py-3 gap-2 h-11",
      lg: "text-base px-8 py-3.5 gap-2.5 h-13 min-h-[48px]",
    };

    const variantStyles = {
      primary:
        "bg-yellow-500 hover:bg-yellow-400 text-navy-950 shadow-yellow-glow hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-yellow-400 font-extrabold",
      secondary:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-glow hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-blue-500",
      whatsapp:
        "bg-yellow-500 hover:bg-yellow-400 text-navy-950 shadow-yellow-glow hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-yellow-400 font-extrabold",
      "outline-white":
        "bg-white/5 hover:bg-white/15 text-white border border-white/30 backdrop-blur-sm hover:border-white/60 focus-visible:ring-white",
      "outline-blue":
        "bg-transparent hover:bg-blue-50 text-blue-700 border border-blue-600/30 hover:border-blue-700 focus-visible:ring-blue-600",
      dark: "bg-navy-900 hover:bg-navy-800 text-white border border-navy-700/60 focus-visible:ring-navy-600",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            target={isExternal || href.startsWith("http") ? "_blank" : undefined}
            rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
