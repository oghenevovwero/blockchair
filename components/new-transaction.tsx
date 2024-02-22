"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modal";
import Heading from "./heading";
import Input from "./input";
import { toast } from "react-hot-toast";
import { Transaction } from "./records";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { useState } from "react";

export default function RegisterModal({
  setOpenModal,
  setData,
  data,
}: {
  data: Transaction[];
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [transactionState, setTransactionState] = useState<"Confirmed" | "Pending" | "Failed">(
    "Confirmed"
  );
  const form = useForm<FieldValues>({});

  const [range, setRange] = useState(1);

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    setOpenModal(false);
    form.reset();
    const generateTransactionHash = () => {
      let randomHash = "";
      const characters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
      //i want 64 length long random hash
      //the characters are all together 62
      for (let counter = 0; counter < 64; counter++) {
        randomHash += characters.charAt(Math.floor(Math.random() * 62));
      }
      return randomHash;
    };

    const transactionHash = generateTransactionHash();
    setData([
      {
        amount: values.amount - 0.0,
        status: "Pending",
        fee: values.fee - 0.0,
        hash: transactionHash,
      } as Transaction,
      ...data,
    ]);

    try {
      setDoc(doc(firestore, "transactions", transactionHash), {
        amount: values.amount - 0.0,
        status: transactionState,
        fee: values.fee - 0.0,
        hash: transactionHash,
        timeStamp: new Date().getTime().toString(),
        sender: values.sender,
        recipient: values.recipient,
        confirmed: range,
      })
        .then(() => {
          toast.success("Transaction created successfully");
          setData([
            {
              amount: values.amount - 0.0,
              status: "Confirmed",
              fee: values.fee - 0.0,
              hash: transactionHash,
            } as Transaction,
            ...data,
          ]);
        })
        .catch((reason) => {
          toast.error("Error creating new transaction");
          setData([
            {
              amount: values.amount - 0.0,
              status: "Failed",
              fee: values.fee - 0.0,
              hash: transactionHash,
            } as Transaction,
            ...data,
          ]);
        });
    } catch (e) {
      toast.error("Error creating new transaction");
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <Heading title="New transaction form" subtitle="Create your transaction!" />
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
      <div className="flex items-center justify-between md:justify-around gap-3">
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
      title="Create new transaction"
      actionLabel="Create"
      onClose={() => {
        setOpenModal(false);
      }}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
