import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
// todo: bold the kd / visually separate kd and kderr
export default function GlycanInfo({ selectedGlycan }) {
  const imgURI = selectedGlycan.img;
  const kdNum = selectedGlycan.kd;
  const glycan = selectedGlycan.glycan;
  const id = selectedGlycan.id;
  const unit = selectedGlycan.unit;
  const kderr = selectedGlycan.kderr;
  const kd = `${kdNum.toPrecision(2)} ± ${kderr.toPrecision(2)} ${
    unit == "mM" ? "mM" : "µM"
  }`;

  return (
    <div className="w-full mt-8 pb-8">
      <CardHeader>
        <CardTitle>{glycan}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-row items-top gap-2">
          <p className="font-bold">K<sub>d</sub>:</p>
          <ul>
            {/* todo: fill via kd array (also convert kd to kd array) */}
            <li>{kd}</li>
          </ul>
        </CardDescription>
        <Image
          src={selectedGlycan.img}
          alt="glycan structure"
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
              <a href={`https://glytoucan.org/Structures/Glycans/${id}`}>
                GlyTouCan ID: {id}
              </a>
            </div>
          </div>
        </div>
      </CardFooter>
    </div>
  );
}
