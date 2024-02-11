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

export default function NewTransaction({
  openModal,
  setOpenModal,
  setData,
  data,
}: {
  data: Transaction[];
  setData: React.Dispatch<React.SetStateAction<Transaction[]>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
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
          toast("Transaction created successfully");
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
          toast("Transaction failed to create");
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
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new transaction</DialogTitle>
          <DialogDescription>
            Enter the amount and fee for the transaction then click create
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
                  <FormDescription>This is the money deposited</FormDescription>
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
                    <FormDescription>This is the money charged</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <div className="flex w-full  items-start  justify-start">
              <Button type="submit">Create transaction</Button>
            </div>
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