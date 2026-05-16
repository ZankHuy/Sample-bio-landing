"use client";

import { useState, useId } from "react";
import { LeadFormConfig } from "@/types";
import { submitToGoogleForm, getFormActionUrl } from "@/lib/google-form";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  config: LeadFormConfig;
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function LeadForm({ config }: LeadFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const notesId = useId();

  const validate = () => {
    const newErrors = { name: "", phone: "", email: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      valid = false;
    } else if (!/^[\d\s+()-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email không hợp lệ";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("submitting");

    const formActionUrl = getFormActionUrl(config.google_form_url);
    const result = await submitToGoogleForm(
      formActionUrl,
      config.field_mapping,
      formData
    );

    if (result.success) {
      setFormState("success");
      setFormData({ name: "", phone: "", email: "", notes: "" });
    } else {
      setFormState("error");
      setErrorMessage(result.error || "Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (!config.enabled) return null;

  if (formState === "success") {
    return (
      <section
        id="lead-form"
        className="py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950"
      >
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="glass-dark rounded-3xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {config.success_message}
            </h3>
            <p className="text-white/50 text-sm">
              Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-6 text-purple-300 hover:text-white text-sm underline"
            >
              Gửi thêm thông tin
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="lead-form"
      className="py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950"
    >
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {config.form_title}
          </h2>
          <p className="text-white/50 text-lg">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ ngay
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-dark rounded-3xl p-8 space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor={nameId}
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Họ và tên <span className="text-red-400">*</span>
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ và tên của bạn"
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/30 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50",
                errors.name
                  ? "border-red-400/50 focus:border-red-400"
                  : "border-white/10 focus:border-purple-500"
              )}
              disabled={formState === "submitting"}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor={phoneId}
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Số điện thoại <span className="text-red-400">*</span>
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0xxx xxx xxx"
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/30 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50",
                errors.phone
                  ? "border-red-400/50 focus:border-red-400"
                  : "border-white/10 focus:border-purple-500"
              )}
              disabled={formState === "submitting"}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor={emailId}
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/10 border text-white placeholder-white/30 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50",
                errors.email
                  ? "border-red-400/50 focus:border-red-400"
                  : "border-white/10 focus:border-purple-500"
              )}
              disabled={formState === "submitting"}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor={notesId}
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Ghi chú
            </label>
            <textarea
              id={notesId}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Nhập yêu cầu, câu hỏi hoặc thông tin bổ sung..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 outline-none transition-colors focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-none"
              disabled={formState === "submitting"}
            />
          </div>

          {/* Error message */}
          {formState === "error" && (
            <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === "submitting"}
            className={cn(
              "w-full py-4 rounded-xl font-bold text-lg transition-all duration-300",
              "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400",
              "text-white shadow-lg shadow-purple-500/30",
              "hover:scale-[1.02] active:scale-[0.98]",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
          >
            {formState === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Đang gửi...
              </span>
            ) : (
              config.submit_button_text
            )}
          </button>

          {/* Privacy note */}
          <p className="text-center text-white/30 text-xs">
            Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
          </p>
        </form>
      </div>
    </section>
  );
}
