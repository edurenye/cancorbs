"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type FormState = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  const [fields, setFields] = useState({
    startDate: "",
    endDate: "",
    children: "",
    email: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldError(null);

    if (!fields.startDate || !fields.endDate || !fields.email) {
      setFieldError(t("booking.error_fields"));
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: fields.startDate,
          endDate: fields.endDate,
          children: Number(fields.children) || 0,
          email: fields.email,
        }),
      });

      if (res.ok) {
        setFormState("success");
        setFields({ startDate: "", endDate: "", children: "", email: "" });
      } else {
        const data = await res.json();
        setFieldError(data.error ?? t("booking.error"));
        setFormState("error");
      }
    } catch {
      setFormState("error");
      setFieldError(t("booking.error"));
    }
  }

  return (
    <section id="booking" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="mb-2 text-xs tracking-[0.3em] text-zinc-600 uppercase">
          {t("booking.sectionKicker")}
        </p>
        <h2 className="mb-10 font-serif text-3xl font-light text-zinc-100">
          {t("booking.title")}
        </h2>

        {formState === "success" ? (
          <div className="border border-zinc-700 bg-zinc-900 px-6 py-8 text-center">
            <p className="text-sm tracking-wide text-zinc-300">
              {t("booking.success")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">
                  {t("booking.label_in")}
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={fields.startDate}
                  onChange={handleChange}
                  required
                  className="border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors focus:border-zinc-500 [color-scheme:dark]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest text-zinc-500 uppercase">
                  {t("booking.label_out")}
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={fields.endDate}
                  onChange={handleChange}
                  required
                  className="border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors focus:border-zinc-500 [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-zinc-500 uppercase">
                {t("booking.label_children")}
              </label>
              <input
                type="number"
                name="children"
                min="0"
                max="90"
                value={fields.children}
                onChange={handleChange}
                placeholder={t("booking.childrenPlaceholder")}
                className="border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors focus:border-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-zinc-500 uppercase">
                {t("booking.label_email")}
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                placeholder={t("booking.emailPlaceholder")}
                className="border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
              />
            </div>

            {fieldError && (
              <p className="text-xs text-red-400">{fieldError}</p>
            )}

            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full border border-zinc-500 py-3.5 text-sm tracking-widest text-zinc-300 uppercase transition-all hover:border-zinc-300 hover:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {formState === "loading"
                ? t("common.loading")
                : t("booking.button")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
