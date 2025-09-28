import { Suspense } from "react";
import { LectinContent } from "./lectincontent";
import LectinContentSkeleton from "./skeleton";

export default async function LectinPage({ params }) {
  // const { id } = use(params);
  // const { id } = await params;
  return (<LectinContentSkeleton />);
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <LectinContent params={params} />
  </Suspense>
  );
}
