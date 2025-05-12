// components/BestSellerSection.tsx
import Image from "next/image";

export default function BestSeller() {
  return (
    <section className="bg-[#2B1D18] text-white py-10 px-6 md:px-12 ">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm tracking-wide uppercase">Our Products</p>
          <h2 className="text-2xl md:text-3xl font-bold">This month’s best seller</h2>
        </div>
        <button className="bg-[#D3F85A] text-black px-4 py-2 rounded font-semibold text-sm">
          See more
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-lg relative">
            <Image
              src={`/product${i + 1}.png`}
              alt={`Product ${i + 1}`}
              width={300}
              height={300}
              className="rounded"
            />
            {i === 1 && (
              <span className="absolute bottom-2 left-2 bg-yellow-300 text-black px-2 py-1 rounded text-xs font-bold">
                $239 · Sofa Und
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
