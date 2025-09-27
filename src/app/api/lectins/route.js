import pl from "nodejs-polars";
import { NextResponse } from "next/server";

export async function GET(request) {
  // const pl = require("nodejs-polars");
  const sheet = pl.read_excel("data/galectins_id_cleaned.xlsx");
  return NextResponse.json({});
}