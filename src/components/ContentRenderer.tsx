"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface ContentRendererProps {
  content: string;
  className?: string;
}

export function ContentRenderer({ content, className }: ContentRendererProps) {
  return (
    <div 
      className={cn("prose prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}