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

import { motion } from "motion/react";

import Link from "next/link";
const MotionRow = motion.create(TableRow)

export default function SearchResults({ lectins, total }) {
  // const router = useRouter();
  return (
    <Table className="min-h-full">
      <TableCaption>{`${total} Lectins`}</TableCaption>
      <TableHeader className="overflow-clip">
        <MotionRow className="hover:bg-transparent overflow-clip"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.15 }}
        >
          <TableHead className="">Lectin</TableHead>
          {/* <TableHead className="text-right"></TableHead> */}
        </MotionRow>
      </TableHeader>
      <TableBody>
        {lectins.map((lect, i) => {
          return (
          <MotionRow 
            className="border-gray-50 cursor-pointer"
            key={lect}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i+1) * 0.05, duration: 0.15 }}
            // onClick={() => router.push(`/lections/${lect}`)}
          >
            <TableCell className="font-medium p-0">
              <Link href={`/${lect}`} className="block w-full h-full py-4 px-2">
                {lect}
              </Link>
            </TableCell>
          </MotionRow>
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
