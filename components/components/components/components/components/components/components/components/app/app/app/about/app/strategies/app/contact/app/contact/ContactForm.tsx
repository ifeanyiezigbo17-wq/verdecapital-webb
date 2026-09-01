here"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import {
  submitContactForm,
  type ContactFormState,
} from "./actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

/**
 * Contact form bound to the server action `submitContactForm`.
 * - useActionState wires the action to the <form> action prop
 * - The result (success/message) drives the status alert below
 */
export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Clear per-field errors once the server responds (whether ok or not)
  useEffect(() => {
    if (state.message) setErrors({});
  }, [state.message]);

  // Reset the form after a successful submit
  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Maria da Silva"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="maria@empresa.com.br"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your investment objectives…"
          className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-slate-400 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
        />
      </div>

      {/* Status alert */}
      {state.message && (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
            state.success
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          {state.success ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          )}
          <span>{state.message}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
