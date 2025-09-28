"use client"
import { Suspense } from "react"
import LectinContent from "./lectincontent"

export default function LectinPage({ params }) {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <LectinContent params={params} />
  </Suspense>
  )
}