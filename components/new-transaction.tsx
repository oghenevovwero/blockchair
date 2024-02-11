"use client";
import { useCallback, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import Modal from "./modal";
import Heading from "./heading";
import Input from "./input";
import { toast } from "react-hot-toast";
import { Transaction } from "./records";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";

export default function RegisterModal({
  setOpenModal,
  setData,
  data,
}: {
  data: Transaction[];
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<FieldValues>({
    defaultValues: {
      amount: 0.0,
      fee: 0.0,
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    setOpenModal(false);
    form.reset();
    const generateHash = () => {
      let randomHash = "";
      const characters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
      //i want 64 length long random hash
      //the characters are all together 62
      for (let counter = 0; counter < 64; counter++) {
        randomHash += characters.charAt(Math.floor(Math.random() * 62));
      }
      return randomHash;
    };
    const transactionHash = generateHash();
    setData([
      {
        amount: values.amount,
        status: "pending",
        fee: values.fee,
        hash: transactionHash,
      } as Transaction,
      ...data,
    ]);

    try {
      setDoc(doc(firestore, "transactions", transactionHash), {
        amount: values.amount,
        fee: values.fee,
        hash: transactionHash,
        timeStamp: new Date().getTime().toString()
      })
        .then(() => {
          toast.success("Transaction created successfully");
          setData([
            {
              amount: values.amount,
              status: "success",
              fee: values.fee,
              hash: transactionHash,
            } as Transaction,
            ...data,
          ]);
        })
        .catch((reason) => {
          toast.error("Error creating new transaction");
          setData([
            {
              amount: values.amount,
              status: "failed",
              fee: values.fee,
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
    <div className="flex flex-col gap-4">
      <Heading
        title="Fill new transaction form"
        subtitle="Create your transaction!"
      />
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
    </div>
  );

  return (
    <Modal
      isOpen={true}
      title="Create new transaction"
      actionLabel="Create"
      onClose={() => {setOpenModal(false)}}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
