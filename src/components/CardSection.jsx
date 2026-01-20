import ProductCard from '@/app/ProductCard/page'

export default async function CardSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop/latestProducts`, {
    cache: 'no-store', // always fresh data
  });
  const data = await res.json();

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8  bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
        All Products
      </h2>

      <div className="grid max-w-7xl mx-auto grid-cols-1 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
