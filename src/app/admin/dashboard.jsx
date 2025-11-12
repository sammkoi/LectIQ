"use client"
import { motion } from "motion/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { UploadCloud } from "lucide-react"
import { FileUp } from "lucide-react"
import { FileScan } from "lucide-react"
import { Table } from "@/components/ui/table"

export default function Dashboard() {
  return (<>
    <div className="flex flex-col gap-4 md;gap-8 w-full h-full">
      <h1 className="text-4xl font-medium font-['Geist']">
        Dashboard
      </h1>
      {/* dashboard part */}
      <motion.div className="grid grid-cols-5 grid-rows-5 w-full h-full min-h-32 md:min-h-64 lg:min-h-96 gap-8">
        {/* <div className="col-span-5 row-span-1">

        </div> */}
        <div className="flex col-span-3 row-span-5 rounded-xl bg-(--background-dim)">

        </div>
        <div className="flex col-span-2 row-span-5 rounded-xl bg-(--background-dim)">

        </div>
        {/* <Card>
          <CardHeader>
            <CardTitle>

            </CardTitle>
            <CardDescription>

            </CardDescription>
          </CardHeader>
        </Card> */}
      </motion.div>
    </div>
  </>)
}