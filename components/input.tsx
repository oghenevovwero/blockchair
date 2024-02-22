"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export default function Input({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
}: {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
}) {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" " /**This has to be " " and not "" */
        type={type}        
        className={`
        peer 
        w-full 
        p-[10px]
        pt-6
        font-light
         bg-white 
         border-2 
         rounded-md 
         outline-none 
         transition
         disabled:opacity-40
         pl-4"
         ${errors[id] ? "border-rose-500" : "border-neutral-300"}
         ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
         `}
      />
      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        left-4
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
}
