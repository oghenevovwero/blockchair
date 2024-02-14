"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modal";
import Heading from "./heading";
import Input from "./input";
import { toast } from "react-hot-toast";
import { Transaction } from "./records";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";

export default function UpdateTransaction({
  setOpenModal,
  setData,
  data,
  transaction,
}: {
  data: Transaction[];
  transaction: Transaction;
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<FieldValues>({
    defaultValues: {
      amount: transaction.amount,
      fee: transaction.fee,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const indexOfTransaction = data.findIndex((item) => item.hash === transaction.hash);

    setOpenModal(false);
    form.reset();
    setData([
      ...data.slice(0, indexOfTransaction),
      {
        ...transaction,
        status: "pending",
        amount: values.amount - 0.0,
        fee: values.fee - 0.0,
      },
      ...data.slice(indexOfTransaction + 1),
    ]);

    try {
      setDoc(
        doc(firestore, "transactions", transaction.hash),
        {
          amount: values.amount - 0.0,
          fee: values.fee - 0.0,
        },
        { merge: true }
      )
        .then(() => {
          toast.success("Transaction updated successfully");
          setData([
            ...data.slice(0, indexOfTransaction),
            {
              status: "success",
              fee: values.fee - 0.0,
              amount: values.amount - 0.0,
              hash: transaction.hash,
              timeStamp: transaction.timeStamp,
            },
            ...data.slice(indexOfTransaction + 1),
          ]);
        })
        .catch((reason) => {
          toast.error("Error updating transaction");
          setData([
            {
              amount: values.amount - 0.0,
              status: "failed",
              fee: values.fee - 0.0,
              hash: transaction.hash,
            } as Transaction,
            ...data,
          ]);
        });
    } catch (e) {
      toast.error("Error updating transaction");
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Fill update transaction form" subtitle="Update your transaction!" />
      <Input
        register={form.register}
        id="amount"
        label="Amount"
        type="number"
        errors={form.formState.errors}
        required
      />
      <Input
        register={form.register}
        id="fee"
        label="Fee"
        type="number"
        errors={form.formState.errors}
        required
      />
      {/* <div className="flex justify-around items-center gap-2">
        <Button label="Confirmed" onClick={() => {}} outline small  />
        <Button label="Pending" onClick={() => {}} outline small  />
        <Button label="Failed" onClick={() => {}} outline small  />
      </div> */}
    </div>
  );

  return (
    <Modal
      isOpen={true}
      title="Update transaction"
      actionLabel="Update"
      onClose={() => {
        setOpenModal(false);
      }}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  className = ""
}: {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${outline ? "bg-white" : "bg-rose-500"}
    ${outline ? "border-black" : "border-rose-500"}
    ${outline ? "text-black" : "text-white"}
    ${small ? "py-1" : "py-3"}
    ${small ? "text-sm" : "text-md"}
    ${small ? "font-light" : "font-semibold"}
    ${small ? "border-[1px]" : "border-2"}
    ${className}
  `}
    >
      {label}
    </button>
  );
}