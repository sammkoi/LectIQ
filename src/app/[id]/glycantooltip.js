"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'

export default function GlycanTooltip({ active, payload, label }) {
  if (!active || !payload || payload.length === 0) return null;
  const dataPoint = payload[0].payload; // full data object
  const imgURI = dataPoint.img;
  const kd = dataPoint.kd;
  const glycan = dataPoint.glycan;
  const id = dataPoint.id;
  // console.log("IMAGE URI:", imgURI)
  
  if (!imgURI) {
    return (<>
      <Card className="p-2">
        <CardContent>
          <CardTitle>{`${glycan}`}</CardTitle>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                {kd}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>)
  }
  
  return (<>
  <Card className="p-2">
    <CardContent >
      <CardTitle>{`${glycan}`}</CardTitle>
      <CardDescription>{`Kd: ${kd}`}</CardDescription>
      <Image 
        src={imgURI} alt="glycan structure" 
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
            GlyTouCan ID: {id}
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
  </>)

}