import BackButton from "./back-button";

const ModalBlogIdPage = async (
  props: PageProps<"/Intercepting-routes/blog/[id]">
) => {
  const { id } = await props.params;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <p className="mb-2 inline-block rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
          Modal Blog
        </p>
        <h2 className="text-xl font-bold text-slate-900">BlogIdPage {id}</h2>
        <p className="mt-2 text-sm text-slate-600">
          Đây là giao diện modal cho route blog chi tiết.
        </p>
        <div className="mt-5 flex justify-end">
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default ModalBlogIdPage;