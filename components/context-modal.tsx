"use client";
import Modal from "./modi";
import { toast } from "react-hot-toast";
import { Transaction } from "./records";
import Home from "./home";
import Link from "next/link";

export default function ContextModal({
  setOpenModal,
  transaction,
  setOpenUpdateModal,
}: {
  transaction: Transaction;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const bodyContent = (
    <div className="flex flex-col text-xl font-light">
      <div
        className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
        onClick={() => {
          navigator.clipboard
            .writeText(window.location.href)
            .then((value) => {
              setOpenModal(false);
              toast.success("Transaction hash copied to clipboard");
            })
            .catch((reason) => {
              setOpenModal(false);
              toast.error("Transaction hash could not be copied to clipboard");
            });
        }}
      >
        Copy transaction hash
      </div>
      <div
        className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
        onClick={() => {
          setOpenModal(false);
          setOpenUpdateModal(true);
        }}
      >
        Update transaction
      </div>

      <Link
        className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer"
        href={`/bitcoin/transaction/${transaction.hash}`}
      >
        View transaction details
      </Link>
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
