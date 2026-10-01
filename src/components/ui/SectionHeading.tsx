import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "blue" | "yellow" | "navy" | "outline";
  title: string;
  highlightText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "blue",
  title,
  highlightText,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  // Se houver highlightText, divide o título para destacar a parte correspondente em amarelo
  let renderedTitle: React.ReactNode = title;
  if (highlightText && title.includes(highlightText)) {
    const parts = title.split(highlightText);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-yellow-400 font-extrabold">{highlightText}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col mb-10 md:mb-14",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "text-xs md:text-sm font-bold uppercase tracking-widest mb-3 inline-flex items-center gap-1.5",
            isDark ? "text-blue-400" : "text-blue-600"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-navy-950"
        )}
      >
        {renderedTitle}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
