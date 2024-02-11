"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modi";
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

export default function ContextModal({
  setOpenModal,
  updateData,
  setOpenUpdateModal
}: {
  updateData: UpdateData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {  
  const bodyContent = (
    <div className="flex flex-col text-xl font-light"
    >
      <div className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer" onClick={() => {
        navigator.clipboard.writeText(updateData.hash).then(value => {
          setOpenModal(false)
          toast.success("Transaction hash copied to clipboard")
        }).catch(reason => {
          setOpenModal(false)
          toast.error("Transaction hash could not be copied to clipboard")
        })
      }}>
        Copy transaction hash
      </div>
      <div className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer" onClick={() => {
        setOpenModal(false)
        setOpenUpdateModal(true)
      }}>
        Update transaction
      </div>
      <div className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
        View transaction details
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
      body={bodyContent}
    />
  );
}
