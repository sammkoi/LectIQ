"use client"
export default function Dashboard() {
  return (<>
    <div className="flex flex-col gap-4 w-full h-full">
      <h1 className="text-4xl font-medium font-['Geist']">
        Dashboard
      </h1>
      {/* dashboard part */}
      <motion.div className="grid grid-cols-2 w-full h-full gap-8">
        <h1>hello world</h1>
      </motion.div>
    </div>
  </>)
}