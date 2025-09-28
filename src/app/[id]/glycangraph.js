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

export default function GlycanGraph({ data }) {
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
    // const {ID, ...cleanGlycan} = glycan;
    chartData.push({
      glycan: dataGlycan['Glycan'],
      kd: dataGlycan['Kd'],
      inv: dataGlycan['1/Kd'],
      sd: dataGlycan['SD'],
      id: dataGlycan['GlyTouCan ID']
    });
  }
  
  
  return (
    <Card className="w-[100%]">
      <CardHeader>
        <CardTitle>Dissociation Plot (1/Kd) </CardTitle>
        {/* <CardDescription></CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={sampleConfig} className="w-full max-h-[50vh]">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis 
              dataKey="glycan"
              tickLine={false}
              tick={false}
              axisLine
            />
            <YAxis
              dataKey="inv"
              tickLine={false}
              label="1/Kd"
              axisLine
            />
            
            <Bar dataKey="inv" fill="var(--chart-3)" radius={8}/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export const description = "A bar chart"

const sampleData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const sampleConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
}

function ChartBarDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={sampleConfig}>
          <BarChart accessibilityLayer data={sampleData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
