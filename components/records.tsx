"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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
import { toast } from "sonner";
import UpdateTransaction, { UpdateData } from "@/components/update-transaction";
import { useParams, usePathname, useRouter } from "next/navigation";
import { TransactionContext } from "@/app/bitcoin/transaction/[transactionId]/page";
import Home from "./home";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type Transaction = {
  hash: string;
  amount: number;
  status: "pending" | "success" | "failed";
  fee: number;
  timeStamp: number;
};

export default function Records() {
  const {setComponent} = React.useContext(TransactionContext)
  const params = useParams();
  const router = useRouter()
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  //const [rowSelection, setRowSelection] = React.useState({});
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [data, setData] = React.useState<Transaction[]>([]);

  const columns: ColumnDef<Transaction>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },

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
        row.getValue("status") === "pending" ? (
          <div className="bg-yellow-300 rounded-full w-[10px] h-[10px] mx-auto"></div>
        ) : row.getValue("status") === "success" ? (
          <div className="bg-green-500 rounded-full w-[10px] h-[10px] mx-auto"></div>
        ) : (
          <div className="bg-red-500 rounded-full w-[10px] h-[10px] mx-auto"></div>
        ),
    },
    {
      id: "actions",
      enableHiding: false,
      header: () => <Plus onClick={() => setOpenNewModal(true)} />,
      cell: ({ row }) => {
        const transaction = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(transaction.hash);
                  toast("Transaction hash copied to clipboard");
                }}
              >
                Copy transaction hash
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="my-3">
                <DropdownMenuItem
                  onClick={() => {
                    setUpdateData({
                      fee: transaction.fee,
                      amount: transaction.amount,
                      hash: transaction.hash,
                    });
                    setOpenUpdateModal(true);
                  }}
                >
                  Update transaction
                </DropdownMenuItem>
              </div>

                <DropdownMenuItem
                  onClick={() => {
                   // window.history.pushState("","", `/bitcoin/transaction/${transaction.hash}`);
                    setComponent(<Home transaction={transaction} />)
                  }}
                >
                  View transaction details
                </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  React.useEffect(() => {
    getDocs(collection(firestore, "transactions")).then((snapshot) => {
      setData(
        snapshot.docs.map((item) => {
          const transaction = item.data() as Transaction;
          return {
            amount: transaction.amount,
            fee: transaction.fee,
            hash: transaction.hash,
            status: "success",
            timeStamp: transaction.timeStamp
          } as Transaction;
        })
      );
      setDataLoaded(true);
    });
  }, []);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    // state: {
    //   sorting,
    //   columnFilters,
    //   columnVisibility,
    //   rowSelection,
    // },
  });
  const [openNewModal, setOpenNewModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [updateData, setUpdateData] = React.useState<UpdateData>();

  return (
    <div>
      <NewTransaction
        data={data}
        setData={setData}
        openModal={openNewModal}
        setOpenModal={setOpenNewModal}
      />
      {updateData && (
        <UpdateTransaction
          updateData={updateData!}
          data={data}
          setData={setData}
          openUpdateModal={openUpdateModal}
          setOpenUpdateModal={setOpenUpdateModal}
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
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
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
          <div className="flex items-center justify-end space-x-2 py-4">
            {/* <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div> */}
            {/* <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
