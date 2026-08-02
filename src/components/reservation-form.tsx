"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "submitting" | "success" | "error";

const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9+"];
const occasions = [
  "No occasion",
  "Birthday",
  "Anniversary",
  "Business dinner",
  "Celebration",
];

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-2xl bg-muted p-8"
      >
        <CheckCircle size={32} weight="fill" className="text-accent" />
        <h3 className="text-xl">Request received.</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thank you — our reservations team will confirm your table by
          phone or email within 24 hours. For same-day requests, please
          call or WhatsApp us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm tracking-wide text-primary uppercase underline decoration-accent decoration-2 underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
        >
          <WarningCircle size={20} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full name" required>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field-input"
          />
        </Field>
        <Field id={`${formId}-phone`} label="Phone number" required>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="field-input"
          />
        </Field>
      </div>

      <Field id={`${formId}-email`} label="Email" required>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="field-input"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field id={`${formId}-date`} label="Date" required>
          <input
            id={`${formId}-date`}
            name="date"
            type="date"
            required
            className="field-input"
          />
        </Field>
        <Field id={`${formId}-time`} label="Time" required>
          <input
            id={`${formId}-time`}
            name="time"
            type="time"
            required
            className="field-input"
          />
        </Field>
        <Field id={`${formId}-party`} label="Guests" required>
          <select
            id={`${formId}-party`}
            name="partySize"
            required
            defaultValue=""
            className="field-input"
          >
            <option value="" disabled>
              Select
            </option>
            {partySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={`${formId}-occasion`} label="Occasion">
        <select
          id={`${formId}-occasion`}
          name="occasion"
          defaultValue={occasions[0]}
          className="field-input"
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </Field>

      <Field id={`${formId}-message`} label="Special requests" hint="Allergies, seating preferences, celebrations — let us know.">
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className="field-input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 text-sm tracking-wide text-on-primary uppercase transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Reservation"}
      </button>
      <p className="text-xs text-muted-foreground">
        This sends a request — it does not guarantee a table. We&rsquo;ll
        confirm availability by phone or email.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm tracking-wide text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
