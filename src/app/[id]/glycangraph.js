"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ErrorBar } from "recharts"
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import GlycanTooltip from "./glycantooltip"
import { useState } from "react"

export const glycanChartConfig = {
  "glycan": {
    name: "Glycan"
  },
  "kd": {
    name: "Kd"
  },
  "inv": {
    name: "1/Kd"
  },
  "sd": {
    name: "SD"
  },
  "id": {
    name: "GlyTouCan ID"
  },
  "unit": {
    name: "Unit"
  },
  "kderr": {
    name: "Kd Error"
  },
  "inverr": {
    name: "1/Kd Error"
  },
}

export default function GlycanGraph({ data, imgs }) {
  /**
   * @typedef {Object} Glycan
   * @property {*} glycan
   * @property {*} unit
   * @property {*} kd
   * @property {*} inv
   * @property {*} id
   * @property {*} img
   * @property {*} kderr
   * @property {*} inverr
   */
  const [ selectedGlycan, setSelectedGlycan ] = useState(null);

  if (!data) {
    return (<div>No data</div>)
  }

  /*
  data[i] = {
    ID: str,
    Glycan: str,
    Kd: int,
    SD: float,
    GlyTouCan ID: str
  }
  */
  
  const chartData = [];
  for (const dataGlycan of data) {
    if (dataGlycan['Kd'] === "NB") { continue; }
    chartData.push({
      glycan: dataGlycan['Glycan'],
      unit: dataGlycan['unit'],
      kd: dataGlycan['Kd'],
      inv: dataGlycan['1/Kd'],
      id: dataGlycan['GlyTouCan ID'],
      img: imgs[dataGlycan['GlyTouCan ID']],
      kderr: dataGlycan['kderr'],
      inverr: dataGlycan['inverr'],
    });
  }

  const sortedChartData = [...chartData].sort((a,b) => (b.inv - a.inv))
  
  return (
    <>
    <Card className="w-[100%] h-fit">
      <CardHeader>
        <CardTitle>Dissociation Plot (1/Kd) </CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={glycanChartConfig} className="w-full max-h-[50vh]">
          <BarChart accessibilityLayer data={sortedChartData} onClick={(e) => {
            if (!e.activeLabel) return;
            const glycan = sortedChartData.find(d => d.glycan == e.activeLabel);
            if (glycan) setSelectedGlycan(glycan)
          }}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis 
              dataKey="glycan"
              tickLine={false}
              tick={false}
              axisLine
              label="Glycan"
            />
            <YAxis
              dataKey="inv"
              tickLine={false}
              label={{
                value: "1/Kd",
                angle: -90,
                dx: -10,
              }}
              axisLine
            />
            <ChartTooltip
              // active={true}
              content={<GlycanTooltip />}
            />
            <Bar dataKey="inv" fill="#18adae" radius={[4, 4, 0, 0]}>
              <ErrorBar dataKey="inverr" stroke="#000000"/>  
            </ Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
    {(selectedGlycan != null) && (
      <div className="w-full mt-8">
        <CardHeader>
          <CardTitle>
            {selectedGlycan.glycan}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{`Kd: ${selectedGlycan.kd}`}</CardDescription>
          <Image 
            src={selectedGlycan.img} alt="glycan structure" 
            width={0}
            height={0}
            className="max-w-[70%] w-auto h-auto max-h-[100px%]"
            priority
          />
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                <a href={`https://glytoucan.org/Structures/Glycans/${selectedGlycan.id}`}>GlyTouCan ID: {selectedGlycan.id}</a>
              </div>
            </div>
          </div>
        </CardFooter>
      </div>
    )}
    </>
  )
}
