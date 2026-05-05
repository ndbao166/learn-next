export default function InterceptingRoutesPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-emerald-500 bg-white p-8 text-center">
      <p className="mb-3 inline-block rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
        Page Area
      </p>
      <h1 className="text-2xl font-bold text-emerald-950">page intercepting routes</h1>
      <p className="mt-3 max-w-md text-sm text-emerald-700">
        Phần này nằm trong `page.tsx`, được render ở vị trí children của layout.
      </p>
    </div>
  );
}
