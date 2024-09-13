
const suppliersData = [
  { id: 1, image: "/images/guimaras.jpg" },
  { id: 2, image: "/images/capiz.jpg" },
  { id: 3, image: "/images/lucena.jpg" },
];

const SuppliersSection: React.FC = () => {
  return (
    <section id="suppliers" className="p-4 md:p-8 text-black bg-gray-50 mt-16 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Suppliers</h2>
      <p className="text-base md:text-lg text-center mb-16 mt-4">
      We proudly source our Darag chickens from the esteemed members of the Panay Darag Chicken Breeders Association (PADABA)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
        {suppliersData.map((supplier) => (
          <div
            key={supplier.id}
            className="relative bg-gray-300 rounded-lg shadow-lg overflow-hidden h-48 sm:h-56 md:h-64 text-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${supplier.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuppliersSection;
