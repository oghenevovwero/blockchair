"use client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./no-header-modal";
import Heading from "./heading";
import Input from "./input";
import { toast } from "react-hot-toast";
import Button from "./button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fireAuth } from "@/firebase";
import { FirebaseError } from "firebase/app";

export default function LoginModal({ setOpenNew }: { setOpenNew: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    signInWithEmailAndPassword(fireAuth, data.email, data.password).then(user => {
      setIsLoading(false)
    }).catch((error: FirebaseError) => {
      toast.error("Error logging in")
      setIsLoading(false)
    })
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
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
          <div>First time here?</div>
          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={() => setOpenNew()}
          >
            Create an account
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
