"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  phone: string;
  pain: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  pain?: string;
}

const PAIN_OPTIONS = [
  "Knee Pain",
  "Back Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Others",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.phone.trim()) {
    errors.phone = "Mobile number is required.";
  } else if (!/^\d{10}$/.test(data.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }
  if (!data.pain) errors.pain = "Please select your pain area.";
  return errors;
}

const ScannerForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ name: "", phone: "", pain: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: "",
          areaOfPain: form.pain,
          source: "scanner-form",
          formName: "ScannerForm",
          consent: true,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      router.push("/thankyou-for-scanning");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap');

        .scanner-shiny-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 36px;
          background: #e13e20;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Rubik', sans-serif;
          letter-spacing: 0.06em;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(225, 62, 32, 0.35);
          transition: box-shadow 0.2s, transform 0.15s;
          min-width: 180px;
        }
        .scanner-shiny-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .scanner-shiny-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0.7) 0%,
            rgba(255,255,255,0.2) 60%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          animation: scanner-shine 1.6s linear infinite;
        }
        @keyframes scanner-shine {
          0% { left: -75%; }
          100% { left: 120%; }
        }
        .scanner-shiny-btn:not(:disabled):hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(225, 62, 32, 0.45);
        }
        .scanner-input {
          width: 100%;
          border-radius: 9999px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          padding: 10px 18px;
          color: #374151;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
          appearance: none;
          -webkit-appearance: none;
        }
        .scanner-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }
        .scanner-input.error-field {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
        }
        .scanner-label {
          display: block;
          margin-bottom: 5px;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          color: #374151;
        }
        .scanner-error {
          font-size: 11.5px;
          color: #ef4444;
          margin-top: 4px;
          padding-left: 14px;
          font-family: 'Outfit', sans-serif;
        }
        @media (max-width: 480px) {
          .scanner-shiny-btn { width: 100%; min-width: unset; }
        }
      `}</style>

      <div className="w-full" style={{ fontFamily: "'Outfit', sans-serif" }}>
        <div className="bg-[#ffeef0] rounded-2xl shadow-md p-5 sm:p-7">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
              Ayush Ortho — Puducherry
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight">
              Relief from{" "}
              <span className="text-orange-500">Knee, Back, Neck</span>
              {" "}&amp;{" "}
              <span className="text-orange-500">Shoulder Pain</span>
              {" "}Starts Here
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Fill in your details and our team will confirm your slot.
            </p>
          </div>

          {/* Success State */}
          {status === "success" ? (
            <div className="text-center py-10 px-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">You&apos;re all set!</h3>
              <p className="text-gray-600 text-sm">
                We&apos;ve received your request. Our team will call you to confirm your appointment.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-5 text-orange-500 text-sm font-semibold underline underline-offset-2"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-4">

                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="scanner-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`scanner-input${errors.name ? " error-field" : ""}`}
                  />
                  {errors.name && <span className="scanner-error">{errors.name}</span>}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="scanner-label">Mobile Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your 10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className={`scanner-input${errors.phone ? " error-field" : ""}`}
                  />
                  {errors.phone && <span className="scanner-error">{errors.phone}</span>}
                </div>

                {/* Pain Area */}
                <div className="flex flex-col">
                  <label htmlFor="pain" className="scanner-label">Pain Area</label>
                  <select
                    id="pain"
                    name="pain"
                    value={form.pain}
                    onChange={handleChange}
                    className={`scanner-input${errors.pain ? " error-field" : ""}`}
                  >
                    <option value="" disabled>Select pain area</option>
                    {PAIN_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.pain && <span className="scanner-error">{errors.pain}</span>}
                </div>

              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 text-center">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              {/* Submit */}
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="scanner-shiny-btn"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Booking...
                    </span>
                  ) : (
                    "BOOK APPOINTMENT"
                  )}
                </button>
              </div>

              <p className="text-center text-gray-400 text-xs mt-3">
                We respect your privacy. No spam, ever.
              </p>

              {/* Address */}
              <div className="mt-5 pt-4 border-t border-orange-100 text-center space-y-1">
                <p className="text-gray-500 text-xs leading-relaxed">
                  📍 AYUSH ORTHO, C Block, Lakshmi Homes, Mariamman Koil St,<br />
                  Vinoba nagar, Saram, Puducherry, Tamil Nadu 605008
                </p>
                <p className="text-gray-500 text-xs">
                  📞 <a href="tel:+919150900387" className="text-orange-500 font-medium">+91 91509 00387</a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ScannerForm;
