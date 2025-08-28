"use client";

import React, { useEffect } from "react";
import { cn } from "@/utils/cn";

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function CustomModal({ open, onOpenChange, children, className }: CustomModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in-0 duration-300"
        aria-hidden="true"
      />
      
      {/* Modal content */}
      <div 
        className={cn(
          "relative z-10 w-full max-w-lg mx-4 bg-[#0A0B14] border border-white/10 rounded-lg p-6 shadow-lg animate-in fade-in-0 zoom-in-95 duration-300",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0B14]"
          aria-label="Close"
        >
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {children}
      </div>
    </div>
  );
}