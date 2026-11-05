export default function Kartu({ judul, id, children }) {
  return (
    <section
      id={id}
      className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <h2 className="mb-4 text-xl font-bold text-utama dark:text-sky-200">
        {judul}
      </h2>
      {children}
    </section>
  );
}
