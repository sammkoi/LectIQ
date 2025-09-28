"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

export default function SearchResults({ lectins }) {
  // const router = useRouter();
  return (
    <Table>
      {/* <TableCaption>Results</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Lectin</TableHead>
          {/* <TableHead className="text-right"></TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {lectins.map((lect) => {
          return (
          <TableRow 
            className="border-gray-50 cursor-pointer"
            key={lect}
            // onClick={() => router.push(`/lections/${lect}`)}
          >
            <TableCell className="font-medium p-0">
              <Link href={`/${lect}`} className="block w-full h-full py-4 px-2">
                {lect}
              </Link>
            </TableCell>
          </TableRow>
          )
        })}
        {/* <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell className="flex flex-row items-center justify-end text-right"><SquareArrowOutUpRight size={12}/></TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
}
