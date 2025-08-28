"use client";

import React, { useState } from "react";
import { CustomModal } from "./CustomModal";
import { cn } from "@/utils/cn";

interface LeadFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  acceptPrivacy: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  acceptPrivacy?: string;
}

export function LeadFormModal({ open, onOpenChange }: LeadFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+49",
    phone: "",
    acceptPrivacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Vorname ist erforderlich";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Nachname ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ungültige E-Mail-Adresse";
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = "Sie müssen die Datenschutzerklärung akzeptieren";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("🚀 Sending form data to API:", formData);
      
      const response = await fetch("/api/zapier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+49",
        phone: "",
        acceptPrivacy: false,
      });

      // Close modal and redirect to thank-you page after 2 seconds
      setTimeout(() => {
        onOpenChange(false);
        setSubmitStatus("idle");
        window.location.href = "/thank-you";
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomModal open={open} onOpenChange={onOpenChange} className="touch-pan-y">
      <div className="space-y-4">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gradient-silver">
            Kostenlosen Videokurs sichern
          </h2>
          <p className="text-gray-400 mt-2">
            Erhalten Sie exklusiven Zugang zu unserem Trading-Videokurs und 
            starten Sie noch heute Ihre Erfolgsgeschichte.
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="py-8 text-center">
            <div className="text-green-400 text-lg font-semibold mb-2">
              ✓ Erfolgreich registriert!
            </div>
            <p className="text-gray-400">
              Sie erhalten in Kürze eine E-Mail mit weiteren Informationen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-300 text-left block">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete="given-name"
                  className={cn(
                    "w-full px-3 py-2 bg-[#15192C] border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1CC5FF] focus:border-transparent",
                    errors.firstName ? "border-red-500" : "border-white/20"
                  )}
                  placeholder="Max"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-300 text-left block">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="family-name"
                  className={cn(
                    "w-full px-3 py-2 bg-[#15192C] border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1CC5FF] focus:border-transparent",
                    errors.lastName ? "border-red-500" : "border-white/20"
                  )}
                  placeholder="Mustermann"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 text-left block">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                className={cn(
                  "w-full px-3 py-2 bg-[#15192C] border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1CC5FF] focus:border-transparent",
                  errors.email ? "border-red-500" : "border-white/20"
                )}
                placeholder="max@beispiel.de"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-300 text-left block">
                Telefon (optional)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-20 px-3 py-2 bg-[#15192C] border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1CC5FF] focus:border-transparent"
                  placeholder="+49"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="tel"
                  className="flex-1 px-3 py-2 bg-[#15192C] border border-white/20 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1CC5FF] focus:border-transparent"
                  placeholder="123 456789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptPrivacy"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-[#15192C] text-[#1CC5FF] focus:ring-2 focus:ring-[#1CC5FF] focus:ring-offset-0"
                />
                <label htmlFor="acceptPrivacy" className="text-sm text-gray-300">
                  Ich habe die{" "}
                  <a 
                    href="/datenschutz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1CC5FF] hover:underline"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und akzeptiere diese *
                </label>
              </div>
              {errors.acceptPrivacy && (
                <p className="text-red-500 text-xs">{errors.acceptPrivacy}</p>
              )}
            </div>

            {submitStatus === "error" && (
              <div className="text-red-500 text-sm text-center">
                Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                Abbrechen
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "px-6 py-2 rounded-md font-semibold transition-all",
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#1CC5FF] to-[#3D55CD] hover:opacity-90 text-white"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  "Senden"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </CustomModal>
  );
}