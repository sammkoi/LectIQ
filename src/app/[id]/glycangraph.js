"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ErrorBar } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import GlycanTooltip from "./glycantooltip";
import GlycanInfo from "./glycaninfo";
import { useState } from "react";

export const glycanChartConfig = {
  glycan: {
    name: "Glycan",
  },
  kd: {
    name: "K\u2091",
  },
  inv: {
    name: "1/K\u2091",
  },
  sd: {
    name: "SD",
  },
  id: {
    name: "GlyTouCan ID",
  },
  unit: {
    name: "Unit",
  },
  kderr: {
    name: "K\u2091 Error",
  },
  inverr: {
    name: "1/K\u2091 Error",
  },
};

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
  const [selectedGlycan, setSelectedGlycan] = useState(null);

  if (!data) {
    return <div>No data</div>;
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
    if (dataGlycan["Kd"] === "NB") {
      continue;
    }
    const inverr = dataGlycan["inverr"];
    const inv = dataGlycan["1/Kd"];
    chartData.push({
      glycan: dataGlycan["Glycan"],
      unit: dataGlycan["unit"],
      kd: dataGlycan["Kd"],
      inv: inv,
      id: dataGlycan["GlyTouCan ID"],
      img: imgs[dataGlycan["GlyTouCan ID"]],
      kderr: dataGlycan["kderr"],
      inverr: [
        // ((Math.abs(inverr) > Math.abs(inv)) ? 0 : inverr),
        Math.min(inv, inverr),
        inverr,
      ],
      zero: 0,
    });
  }

  const sortedChartData = [...chartData].sort((a, b) => b.inv - a.inv);
  // const invMax = Math.max(...chartData.map(data => data.inv));

  return (
    <>
      <Card className="w-[100%] h-fit">
        <CardHeader></CardHeader>
        <CardContent>
          <ChartContainer
            config={glycanChartConfig}
            className="w-full max-h-[50vh]"
          >
            <BarChart
              accessibilityLayer
              data={sortedChartData}
              onClick={(e) => {
                if (!e.activeLabel) return;
                const glycan = sortedChartData.find(
                  (d) => d.glycan == e.activeLabel
                );
                if (glycan) setSelectedGlycan(glycan);
              }}
            >
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
                // domain={[0, 'dataMax + 0.1']}
                label={{
                  value: '1/Kd',
                  // TODO: make it a subscript
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
                <ErrorBar dataKey="inverr" stroke="#000000" />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      {selectedGlycan != null && <GlycanInfo selectedGlycan={selectedGlycan} />}
    </>
  );
}
