"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormType } from "@/lib/zod";
import { ContactMessage } from "@/lib/action";
import { useFormState } from "react-dom";
import type { ContactFormState } from "@/lib/action-types";
import clsx from "clsx";

const initialState: ContactFormState = { error: {} };

export default function ContactFormPage() {
  const [state, formAction, isPending] = useFormState(
    ContactMessage,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema),
    mode: "onChange",
  });

    const onSubmit = (data: ContactFormType) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formAction(formData);
  };

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      {"message" in state && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
          {state.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate
        className="grid gap-4"
      >
        <div className="grid md:grid-cols-2 gap-7 mt-6">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              {...register("name")}
              className="mt-1 bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Full name"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-sm">
                {errors.name?.message ||
                  ("error" in state && state.error?.name?.[0])}
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="mt-1 bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="you@example.com"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-sm">
                {errors.email?.message ||
                  ("error" in state && state.error?.email?.[0])}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium">Subject</label>
            <input
              {...register("subject")}
              className="mt-1 bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Subject"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-sm">
                {errors.subject?.message ||
                  ("error" in state && state.error?.subject?.[0])}
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light"
              placeholder="Your message..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-red-500 text-sm">
                {errors.message?.message ||
                  ("error" in state && state.error?.message?.[0])}
              </p>
            </div>
          </div>
        </div>
        <button
  type="submit"
  className={clsx(
    "px-10 py-4 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer",
    {
      "opacity-50 cursor-progress animate-pulse": isPending,
    }
  )}
  disabled={isPending} // hanya nonaktifkan jika sedang loading
>
  {isPending ? "Loading..." : "Send Message"}
</button>
      </form>
    </div>
  );
}
