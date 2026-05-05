import Link from "next/link";


export default function InterceptingRoutesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-4xl flex-col gap-6 rounded-3xl border-4 border-blue-500 bg-blue-50 p-6 shadow-xl">
        <div className="rounded-2xl border-2 border-dashed border-blue-400 bg-white p-5">
          <p className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
            Layout Area
          </p>
          <h1 className="text-3xl font-bold text-blue-950">Đây là layout</h1>
          <p className="mt-2 text-sm text-blue-700">
            Phần này nằm trong `layout.tsx` và luôn bọc các page con.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li>
              <Link className="rounded-lg bg-blue-100 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-blue-200" href="/Intercepting-routes">
                Home
              </Link>
            </li>
            <li>
              <Link className="rounded-lg bg-blue-100 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-blue-200" href="/Intercepting-routes/blog/1">
                Blog 1
              </Link>
            </li>
            <li>
              <Link className="rounded-lg bg-blue-100 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-blue-200" href="/Intercepting-routes/blog/2">
                Blog 2
              </Link>
            </li>
            <li>
              <Link className="rounded-lg bg-blue-100 px-4 py-2 text-lg font-medium text-blue-800 hover:bg-blue-200" href="/Intercepting-routes/blog/3">
                Blog 3
              </Link>
            </li>
          </ul>
        </div>

        <main className="flex flex-1 rounded-2xl border-4 border-emerald-500 bg-emerald-50 p-6">
          {children}
          {modal}
        </main>
      </section>
    </div>
  );
}
