"use client";
import Modal from "./modi";
import { toast } from "react-hot-toast";
import { Transaction } from "./records";
import Home from "./home";


export default function ContextModal({
  setOpenModal,
  transaction,
  setOpenUpdateModal,
  setComponent,
  setPageTransaction
}: {
  setPageTransaction: React.Dispatch<React.SetStateAction<Transaction | undefined>>;
  transaction: Transaction;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setComponent: React.Dispatch<React.SetStateAction<React.JSX.Element>>
}) {  
  const bodyContent = (
    <div className="flex flex-col text-xl font-light"
    >
      <div className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer" onClick={() => {
        navigator.clipboard.writeText(transaction.hash).then(value => {
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
      <div onClick={() => {
        setPageTransaction(transaction)
        setComponent(<Home transaction={transaction} />)
      }} className="py-5 px-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer">
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
