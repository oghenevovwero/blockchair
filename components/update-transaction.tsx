"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  collection,
  addDoc,
  DocumentReference,
  DocumentData,
  setDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "./../firebase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { toast } from "sonner";
import { Transaction } from "./records";

const formSchema = z.object({
  amount: z.coerce.number().positive({
    message: "Amount must be positive",
  }),
  fee: z.coerce.number().positive({
    message: "Fee must be positive",
  }),
});

export type UpdateData = {
  amount: number;
  fee: number;
  hash: string;
  timeStamp: number;
};

export default function UpdateTransaction({
  openUpdateModal,
  setOpenUpdateModal,
  setData,
  data,
  updateData,
}: {
  updateData: UpdateData;
  data: Transaction[];
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  openUpdateModal: boolean;
  setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0.0,
      fee: 0.0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const indexOfTransaction = data.findIndex((item) => item.hash === updateData.hash);

    setOpenUpdateModal(false);
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
          toast("Transaction updated successfully");
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
          toast("Transaction failed to update");
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
      console.error("Error updating document: ", e);
    }
  }

  return (
    <Dialog open={openUpdateModal} onOpenChange={setOpenUpdateModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update transaction details</DialogTitle>
          <DialogDescription>
            Enter the amount and fee for the transaction then update
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="Transaction amount" {...field} />
                  </FormControl>
                  <FormDescription>New amount to update to</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fee"
              render={({ field }) => (
                <div className="mt-5">
                  <FormItem>
                    <FormLabel>Fee</FormLabel>
                    <FormControl>
                      <Input placeholder="Transaction fee" {...field} />
                    </FormControl>
                    <FormDescription>New fee to update to</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <Button type="submit">Update transaction</Button>
          </form>
        </Form>

        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Amount
            </Label>
            <Input id="name" defaultValue="0.0" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Fee
            </Label>
            <Input id="amount" defaultValue="0.0" className="col-span-3" />
          </div>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
