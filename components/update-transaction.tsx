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

export type UpdateData = {
  amount: number;
  fee: number;
  hash: string;
  timeStamp: number;
};

export default function UpdateTransaction({
  setOpenModal,
  setData,
  data,
  updateData
}: {
  data: Transaction[];
  updateData: UpdateData;
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
    const indexOfTransaction = data.findIndex((item) => item.hash === updateData.hash);

    setOpenModal(false);
    form.reset();
    setData([
      ...data.slice(0, indexOfTransaction),
      { ...updateData, status: "pending" },
      ...data.slice(indexOfTransaction + 1),
    ]);

    try {
      setDoc(
        doc(firestore, "transactions", updateData.hash),
        {
          amount: values.amount,
          fee: values.fee,
        },
        { merge: true }
      )
        .then(() => {
          toast.success("Transaction updated successfully");
          setData([
            ...data.slice(0, indexOfTransaction),
            {
              status: "success",
              fee: values.fee,
              amount: values.amount,
              hash: updateData.hash,
              timeStamp: updateData.timeStamp
            },
            ...data.slice(indexOfTransaction + 1),
          ]);
        })
        .catch((reason) => {
          toast.error("Error updating transaction");
          setData([
            {
              amount: values.amount,
              status: "failed",
              fee: values.fee,
              hash: updateData.hash,
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
      <Heading
        title="Fill update transaction form"
        subtitle="Update your transaction!"
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
      title="Update transaction"
      actionLabel="Update"
      onClose={() => {setOpenModal(false)}}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
