"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
}

export default function GlycanGraph({ data, imgs }) {
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
      kd: dataGlycan['Kd'],
      inv: dataGlycan['1/Kd'],
      sd: dataGlycan['SD'],
      id: dataGlycan['GlyTouCan ID'],
      img: imgs[dataGlycan['GlyTouCan ID']]
    });
  }

  const sortedChartData = [...chartData].sort((a,b) => (a.inv - b.inv))
  
  
  return (
    <Card className="w-[100%]">
      <CardHeader>
        <CardTitle>Dissociation Plot (1/Kd) </CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={glycanChartConfig} className="w-full max-h-[50vh]">
          <BarChart accessibilityLayer data={sortedChartData}>
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
            <Bar dataKey="inv" fill="var(--chart-3)" radius={8}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
