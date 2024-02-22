"use client";
import { firestore } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Heading from "./heading";
import Input from "./input";
import Modal from "./modal";
import { Transaction } from "./records";

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
  const [transactionState, setTransactionState] = useState<"Confirmed" | "Pending" | "Failed">(
    transaction.status
  );
  const [range, setRange] = useState(transaction.confirmed);
  const form = useForm<FieldValues>({
    defaultValues: {
      amount: transaction.amount,
      fee: transaction.fee,
      recipient: transaction.recipient,
      sender: transaction.sender,
      confirmed: transaction.confirmed,
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
        status: "Pending",
        amount: values.amount - 0.0,
        fee: values.fee - 0.0,
        sender: values.sender,
        recipient: values.recipient,
        timeStamp: transaction.timeStamp,
        confirmed: values.confirmed,
      },
      ...data.slice(indexOfTransaction + 1),
    ]);

    try {
      setDoc(
        doc(firestore, "transactions", transaction.hash),
        {
          amount: values.amount - 0.0,
          fee: values.fee - 0.0,
          sender: values.sender,
          recipient: values.recipient,
          timeStamp: transaction.timeStamp,
          confirmed: range,
          status: transactionState,
        },
        { merge: true }
      )
        .then(() => {
          toast.success("Transaction updated successfully");
          setData([
            ...data.slice(0, indexOfTransaction),
            {
              status: transactionState,
              fee: values.fee - 0.0,
              amount: values.amount - 0.0,
              hash: transaction.hash,
              sender: values.sender,
              recipient: values.recipient,
              timeStamp: transaction.timeStamp,
              confirmed: range,
            },
            ...data.slice(indexOfTransaction + 1),
          ]);
        })
        .catch((reason) => {
          toast.error("Error updating transaction");
          setData([
            {
              amount: values.amount - 0.0,
              status: "Failed",
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
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <Heading title="Update transaction" subtitle="Update your transaction!" />
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
      <div className="w-full relative flex items-center gap-3">
        <input
          onChange={(e) => {
            setRange(parseInt(e.currentTarget.value));
          }}
          title="Confirmed"
          id="confirmed"
          placeholder=" " /**This has to be " " and not "" */
          type="range"
          min={1}
          step={1}
          max={12}
          defaultValue={1}
          className={`
        peer 
        flex-1
        font-light
         bg-white 
         border-2 
         rounded-md 
         outline-none 
         transition
         disabled:opacity-40
         "
         `}
        />
        <div className="font-bold mr-1">{range}</div>
      </div>
      <Input
        register={form.register}
        id="sender"
        label="Sender address"
        type="string"
        errors={form.formState.errors}
        required
      />
      <Input
        register={form.register}
        id="recipient"
        label="Recipient address"
        type="string"
        errors={form.formState.errors}
        required
      />
      <div className="flex items-center justify-between md:justify-around p-2">
        <button
          onClick={() => setTransactionState("Confirmed")}
          className={`border border-green-500 p-2 rounded-lg ${
            transactionState === "Confirmed"
              ? "bg-green-500 p-[10px] text-white font-extralight text-sm"
              : ""
          }`}
        >
          Confirmed
        </button>
        <button
          onClick={() => setTransactionState("Pending")}
          className={`border border-yellow-500 p-2 rounded-lg ${
            transactionState === "Pending"
              ? "bg-yellow-500 p-[10px] text-white font-extralight text-sm"
              : ""
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setTransactionState("Failed")}
          className={`border border-red-500 p-2 rounded-lg ${
            transactionState === "Failed"
              ? "bg-red-500 p-[10px] text-white font-extralight text-sm"
              : ""
          }`}
        >
          Failed
        </button>
      </div>
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
  className = "",
}: {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  className?: string;
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
