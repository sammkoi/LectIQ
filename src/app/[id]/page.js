import { Suspense } from "react";
import { LectinContent } from "./lectincontent";
import LectinContentSkeleton from "./skeleton";

export default async function LectinPage({ params }) {
  return (
  <Suspense fallback={<LectinContentSkeleton />}>
    <LectinContent params={params} />
  </Suspense>
  );
}
