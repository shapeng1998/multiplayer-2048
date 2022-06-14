export const Board = () => {
  return (
    <div className="grid grid-cols-4 gap-2 p-2 sm:max-w-screen-sm w-4/5 aspect-square bg-gray-700">
      {Array.from({ length: 16 }, (_, index) => (
        <div key={index} className="bg-gray-400"></div>
      ))}
    </div>
  )
}
