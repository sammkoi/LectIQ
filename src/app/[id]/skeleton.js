export default function LectinContentSkeleton() {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div 
        className="w-[15rem] bg-(--search-bar-color) h-[2.5rem] rounded-lg animate-pulse"
      />
      <div
        className="w-full bg-(--search-bar-color) h-[50vh] rounded-lg animate-pulse" 
      />
    </div>
  )
}