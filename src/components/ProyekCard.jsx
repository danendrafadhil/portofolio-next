export default function ProyekCard({ judul, kategori, deskripsi }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
      <p className="mb-2 inline-flex rounded-full bg-latar px-2 py-1 text-[11px] font-medium text-gray-600">
        {kategori}
      </p>
      <h3 className="text-sm font-semibold text-utama">{judul}</h3>
      <p className="mt-1 text-xs leading-5 text-gray-600">{deskripsi}</p>
    </article>
  );
}
