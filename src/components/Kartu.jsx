export default function Kartu({ judul, id, children }) {
  return (
    <section
      id={id}
      className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-bold text-utama">{judul}</h2>
      {children}
    </section>
  );
}
