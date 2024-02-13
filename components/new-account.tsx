"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "./heading";
import Input from "./input";
import { toast } from "react-hot-toast";
import Button from "./button";
import Modal from "./no-header-modal";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fireAuth } from "@/firebase";
import { FirebaseError } from "firebase/app";

export default function NewAccountModal({ setOpenLogin }: { setOpenLogin: () => void }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(fireAuth, data.email, data.password).then(user => {
      setIsLoading(false)
      toast.success("Account created successfully")
    }).catch((error: FirebaseError) => {
      toast.error("Error creating account")
      setIsLoading(false)
    })
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="First time here?" subtitle="Create your account!" />
      <Input
        register={register}
        id="email"
        label="Email"
        type="email"
        errors={errors}
        disabled={isLoading}
        required
      />
      <Input
        register={register}
        id="password"
        label="Password"
        type="password"
        errors={errors}
        disabled={isLoading}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex justify-center items-center gap-2">
          <div>Already signed in?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={() => setOpenLogin()}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={true}
      title="Login"
      actionLabel="Continue"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
