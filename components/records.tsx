"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewTransaction from "@/components/new-transaction";
import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import ContextModal from "./context-modal";
import UpdateTransaction from "./update-transaction";
import { Plus, PlusCircle } from "lucide-react";

export type Transaction = {
  hash: string;
  amount: number;
  status: "Pending" | "Confirmed" | "Failed";
  fee: number;
  timeStamp: number;
  sender: string;
  recipient: string;
  confirmed: number;
};

export default function Records() {
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [data, setData] = React.useState<Transaction[]>([]);

  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "amount",
      header: () => <div className="text-left">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="text-left font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "fee",
      header: () => <div className="text-left">Fees</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("fee"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className="font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "status",
      header: () => <div className="text-center">Status</div>,
      cell: ({ row }) =>
        row.getValue("status") === "Pending" ? (
          <div className="w-fit h-fit mx-auto">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading data...</span>
            </div>
          </div>
        ) : row.getValue("status") === "Confirmed" ? (
          <div className="bg-green-500 rounded-full w-[6px] sm:w-[10px] h-[6px] sm:h-[10px] mx-auto"></div>
        ) : (
          <div className="bg-red-500 rounded-full w-[6px] sm:w-[10px] h-[6px] sm:h-[10px] mx-auto"></div>
        ),
    },
    {
      accessorKey: "hash",
      header: () => (
        <div className="text-left ml-1 color-green hover:cursor-pointer hover:bg-gray-300 w-fit p-1 rounded-full">
          <Plus
            color="green"
            size={24}
            onClick={() => {
              setOpenNewModal(true);
            }}
          />
        </div>
      ),
      cell: ({ row }) => (
        <div className="text-left ">{(row.getValue("hash") as string).substring(0, 5) + "..."}</div>
      ),
    },
  ];

  React.useEffect(() => {
    getDocs(collection(firestore, "transactions")).then((snapshot) => {
      setData(
        snapshot.docs.map((item) => {
          return {
            ...(item.data() as Transaction),
          };
        })
      );
      setDataLoaded(true);
    });
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  const [openNewModal, setOpenNewModal] = React.useState(false);
  const [openContextModal, setOpenContextModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [transaction, setUpdateData] = React.useState<Transaction>();

  return (
    <div>
      {openNewModal && (
        <NewTransaction data={data} setData={setData} setOpenModal={setOpenNewModal} />
      )}
      {transaction && openContextModal && (
        <ContextModal
          setOpenUpdateModal={setOpenUpdateModal}
          setOpenModal={setOpenContextModal}
          transaction={transaction}
        />
      )}
      {transaction && openUpdateModal && (
        <UpdateTransaction
          transaction={transaction!}
          setData={setData}
          data={data}
          setOpenModal={setOpenUpdateModal}
        />
      )}
      {!dataLoaded ? (
        <div className="flex h-screen w-full items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading data...</span>
          </div>
        </div>
      ) : (
        <div className="py-1 sm:py-3 md:py-4 lg:py-5 xl:py-6 px-1 sm:px-3 md:px-4 lg:px-5 xl:px-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      className="hover:bg-gray-300 hover:cursor-pointer text-xs sm:text-sm"
                      onClick={() => {
                        setUpdateData(row.original);
                        setOpenContextModal(true);
                      }}
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell className="py-6" key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
